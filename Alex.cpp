      #include "Person.h"
      #include <ctime>
      #include <vector>
      #include <string>

      /* c++ Class representing a bit of me */
      
      class Alex : public Person {

          public:

              std::time_t unix_dob;
              std::string name = "Alexander Wilson";
              std::string loc  = "Edinburgh, United Kingdom";
              std::vector<std::string> interests = {
                  "Computer Architecture",
                  "Code Optimisation",
                  "Computer Security",
                  "Software Architecture",
                  "Programming",
                  "Food",
                  "Travelling",
                  "Sudoku",
                  "Skateboarding",
                  "Movies",
                  "Skiing"
              }

              Alex() {
                  unix_dob = 822873600;                                 // Constructed on 29-01-1996
                  std::cout << "Hey, Welcome to my Webpage!\n";         // Welcome to my webpage.
              }

              std::string getContact(bool is_spam) {
                  if (is_spam)
                      return "";
                  return my_email;  
              }

              int getAge() {
                  std::time_t curr_time = std::time(0);
                  std::time_t seconds_alive = curr_time - unix_dob;     // Get the number of seconds alive.
                  return seconds_alive / (60 * 60 * 24 * 365);          // Convert from seconds to years (without leap years).
              }

          private:

              std::string my_email   = "acwilson96@protonmail.com";

      }