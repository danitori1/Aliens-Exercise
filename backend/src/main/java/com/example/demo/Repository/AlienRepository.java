package com.example.demo.Repository;

import com.example.demo.Document.Alien;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.io.Serializable;
import java.util.List;

@Repository
public interface AlienRepository extends MongoRepository<Alien, String> {
    void deleteByIdIn(List<Integer> ids);
}
