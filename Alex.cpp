      #include "Person.h"
      #include <ctime>
      #include <vector>
      #include <string>

      /* c++ Class representing a bit of me */
      class Alexander : public Person {
          private:
              std::string my_email                = "acwilson96@protonmail.com";
          public:
              std::time_t unix_dob;
              std::string name                    = "Alexander Wilson";
              std::string loc                     = "Edinburgh, United Kingdom";
              std::vector<std::string> interests  = {
                  "Computer Architecture", "Code Optimisation", "Computer Security",
                  "Software Architecture", "Programming", "Food", "Travelling",
                  "Sudoku", "Skateboarding", "Movies", "Skiing"
              }

              Alexander() {
                  unix_dob = 822873600;                                 // Constructed on 29-01-1996
              }

              std::string getContact(bool is_spam) {
                  if (is_spam) return "";
                  return my_email;
              }

              // Convert time in seconds to years.
              int getAge() {
                  std::time_t seconds_alive = std::time(0) - unix_dob;
                  return seconds_alive / (60 * 60 * 24 * 365);
              }
      }