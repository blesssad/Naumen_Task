package org.example.Service;

import com.sun.jdi.Value;
import org.example.Entities.Person;
import org.example.Entities.RequestDataResult;
import org.example.Interfaces.Dao;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.lang.reflect.Array;
import java.util.*;

@Service
public class PersonDao implements Dao<Person> {

    private final List<Person> persons = new ArrayList<>();
    private HashMap<String, Integer> namesAndRequests = new HashMap<>();
    public PersonDao(){
        try (Scanner scanner = new Scanner(new File("src\\main\\resources\\names.txt"))) {
            while (scanner.hasNextLine()){
                String lines = scanner.nextLine();
                String[] arr = lines.split("_");

                try{
                    String name = arr[0];
                    int age = Integer.parseInt(arr[1]);

                    Person newPerson = new Person(name, age);

                    persons.add(newPerson);
                }
                catch (NumberFormatException nfe){
                    System.out.println("NumberFormatException: " + nfe.getMessage());
                }
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public int getAgeByName(String name) {
        Optional<Person> person = persons.stream().filter(x -> x.getName().equals(name)).findFirst();
        if (person.isPresent()){
            namesAndRequests.put(name, namesAndRequests.getOrDefault(name, 0) + 1);

            return person.get().getAge();
        }
        else{
            return 1000;
        }
    }

    @Override
    public String getNameOfOldestPerson(){
        Optional<Person> oldestPerson = persons.stream().max(Comparator.comparingInt(Person::getAge));

        return oldestPerson.isPresent() ? oldestPerson.get().getName() : null;
    }

    public int getRequests(String name){
        return namesAndRequests.get(name);
    }

    public List<RequestDataResult> getRequestsMap(){
        Set<String> keySet = namesAndRequests.keySet();
        ArrayList<String> listOfKeys = new ArrayList<String>(keySet);

        Collection<Integer> values = namesAndRequests.values();
        ArrayList<Integer> listOfValues = new ArrayList<>(values);

        ArrayList<RequestDataResult> listOfRequests = new ArrayList<>();
        for (int i = 0; i < listOfKeys.size(); i++){
            RequestDataResult newRequestDataResult = new RequestDataResult();

            newRequestDataResult.setCountOfRequests(listOfValues.get(i));
            newRequestDataResult.setName(listOfKeys.get(i));

            listOfRequests.add(newRequestDataResult);
        }

        return listOfRequests;
    }
}
