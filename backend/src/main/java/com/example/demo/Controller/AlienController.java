package com.example.demo.Controller;

import com.example.demo.Document.Alien;
import com.example.demo.Service.AlienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = {})
public class AlienController {
    @Autowired
    private AlienService alienService;

    @GetMapping(value="/")
    public List<Alien> getAllAliens() {
        return alienService.findAll();
    }

    @PostMapping(value = "/saveOrUpdateMultiple")
    public <S extends Alien> List<S> saveOrUpdateMultipleAliens(@RequestBody Iterable<S> aliens) {
        return alienService.saveOrUpdateMultipleAliens(aliens);
    }

    @PostMapping(value = "/saveOrUpdate")
    public ResponseEntity<?> saveOrUpdateAlien(@RequestBody Alien alien) {
        alienService.saveOrUpdateAlien(alien);
        return new ResponseEntity<>("Alien added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAll")
    public void deleteByIdIn(@RequestBody List<Integer> ids){
        alienService.deleteByIdIn(ids);
    }

}
