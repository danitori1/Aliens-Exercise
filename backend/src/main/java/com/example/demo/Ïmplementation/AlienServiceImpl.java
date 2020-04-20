package com.example.demo.Ïmplementation;

import com.example.demo.Document.Alien;
import com.example.demo.Repository.AlienRepository;
import com.example.demo.Service.AlienService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;

@Service
public class AlienServiceImpl implements AlienService {
    @Autowired
    private AlienRepository alienRepository;


    @Override
    public @NotNull <S extends Alien> List<S> saveOrUpdateMultipleAliens(Iterable<S> aliens) {
        return alienRepository.saveAll(aliens);
    }

    @Override
    public void saveOrUpdateAlien(Alien alien) {
        alienRepository.save(alien);
    }

    @Override
    public void deleteAll() {
        alienRepository.deleteAll();
    }

    @Override
    public void deleteByIdIn(List<Integer> ids) {
        alienRepository.deleteByIdIn(ids);
    }

    @Override
    public List<Alien> findAll() {
        return alienRepository.findAll();
    }
}
