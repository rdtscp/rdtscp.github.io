      #include "Person.h"
      #include <ctime>
      #include <vector>
      #include <string>

      /* c++ Class representing a bit of me */
      class Alexander : public Person {

              std::time_t unix_dob;
              std::string name                    = "Alexander Wilson";
              std::string my_email                = "acwilson96@protonmail.com";
              std::string loc                     = "Edinburgh, United Kingdom";

              std::vector<std::string> interests  = {
                  "Computer Architecture",
                  "Code Optimisation",
                  "Computer Security",
                  "Software Architecture",
                  "Programming"
              };

              std::vector<std::string> hobbies  = { "Skiing", "Sudoku", "Skateboarding" };
              
              Alexander() {
                  unix_dob = 822873600;           // Constructed on 29-01-1996
              }
              
              // Convert time in seconds to years.
              int getAge() {
                  std::time_t seconds_alive = std::time(0) - unix_dob;
                  return seconds_alive / (60 * 60 * 24 * 365);
              }
      }
