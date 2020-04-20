package com.example.demo.Service;

import com.example.demo.Document.Alien;
import org.springframework.data.repository.query.Param;

import java.awt.print.Pageable;
import java.util.List;

public interface AlienService {
    public <S extends Alien> List<S> saveOrUpdateMultipleAliens(Iterable<S> aliens);

    void saveOrUpdateAlien(Alien alien);

    void deleteAll();

    void deleteByIdIn(List<Integer> ids);

    List<Alien> findAll();
}
