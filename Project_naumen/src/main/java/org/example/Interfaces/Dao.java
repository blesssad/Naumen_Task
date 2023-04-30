package org.example.Interfaces;

import java.util.List;
import java.util.Optional;

public interface Dao<T> {
    int getAgeByName(String name);
    String getNameOfOldestPerson();
}
