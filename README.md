# Redis Pattern Delete


Nodejs programm to delete keys from pattern.

  - nodejs
  - ioredis

# Setup

  - Make sure you have nodejs installed on your machine
  - Create environment variables 
  
  | VariableName | Value |
  | ------ | ------ |
  | cacheHost | your cache host |
  | cachePassword | your cache password |

  - On project root:
    ```sh
    $ npm install 
    ```

# Running
- On project root:
    ```sh
    $ node . <pattern> 
    ```
    example:
    ```sh
    $ node . service_findUnidades*
    ```
