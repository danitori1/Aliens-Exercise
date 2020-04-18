package com.example.demo.Repository;

import com.example.demo.Document.AlienWrapper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.Serializable;

@Repository
@CrossOrigin(value = {})
public interface AlienWrapperRepository extends MongoRepository<AlienWrapper, Serializable> {
    @RestResource(path = "delete", rel = "delete")
    public void deleteAll();
}