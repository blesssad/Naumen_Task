package org.example.Controllers;

import lombok.RequiredArgsConstructor;
import org.example.Entities.RequestDataResult;
import org.example.Service.PersonDao;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "statistic")
public class StatisticController {

    private final PersonDao personDao;

    @GetMapping(value = "/get-requests")
    public List<RequestDataResult> getRequestsMap(){
        return personDao.getRequestsMap();
    }
}
