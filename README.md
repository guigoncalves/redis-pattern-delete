# Redis Pattern Delete


Nodejs programm to delete keys from pattern.

  - nodejs
  - ioredis

# Setup

  - Make sure you have nodejs installed on your machine
  - Create environment variables 
    -  cacheHost=<RedisHost>
    -  cachePassword=<RedisPassword>
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
