package org.example.Controllers;

import lombok.RequiredArgsConstructor;
import org.example.Entities.AgeDataResult;
import org.example.Entities.NameDataResult;
import org.example.Service.PersonDao;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "persons")
public class PersonController {

    private final PersonDao personDao;

    @GetMapping(value = "/get-age/{name}")
    AgeDataResult getAgeByName(@PathVariable("name") String name){
        return new AgeDataResult(personDao.getAgeByName(name));
    }

    @GetMapping(value = "/get-name-of-oldest-person")
    NameDataResult getNameOfOldestPerson(){
        return new NameDataResult(personDao.getNameOfOldestPerson());
    }
}
