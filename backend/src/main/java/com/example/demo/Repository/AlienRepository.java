package com.example.demo.Repository;

import com.example.demo.Document.Alien;
import com.example.demo.Document.AlienWrapper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Repository
@CrossOrigin(value = {})
public interface AlienRepository extends MongoRepository<Alien, Serializable> {

    //@RestResource(path = "saveAll", rel = "saveAll")
    //@RequestMapping(value="", method= RequestMethod.POST,consumes="application/json", produces="application/json")
    //public AlienWrapper insert(@RequestBody AlienWrapper wrapper);

    // @RestResource(path = "deleteById", rel = "deleteById")
    // public long deleteById(@Param("id")int id);

   // @RestResource(path = "name",rel = "name")
    //public AlienWrapper findByName(@Param("name")String name, Pageable pageable);

}