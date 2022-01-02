# **PBL Notes**

**Note:** public static void main() is only needed for stand-alone applications and not for web applications.

## Maven
Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information. It can isolate 

## Hibernate
* Session Factory maintains Connection Pooling.
* Connection pooling means that connections are reused rather than created each time a connection is requested. To facilitate connection reuse, a memory cache of database connections, called a connection pool, is maintained by a connection pooling module as a layer on top of any standard JDBC driver product.

**3 Layers for any Application**

1. @Controller Layer - Accept/Take values
2. @Service Layer - Business Logic
3. @DB Layer - Database Manipulation

## JPA


## Data Access Object (DAO)
More like a set of conventions rather than a module. Useful for interactions with the RDBMS.


## Spring Technologies 
  * Spring Core (IOC, DI)
  * Spring Annotations (@Controller, @RequestMapping)
  * Spring DAO
  * Spring MVC (Web Application)
  * Maven (Build tool)
  * Spring Boot
  * Spring Boot WebService (@RestController)
  * Spring Boot with JPA
  * Spring Boot with DataJPA


### Spring Core
*  **Inversion of Control (IOC)**
  Giving control to the container to get an instance of the object, IOC means instead of you creating object using the new operator, let the container do that for you.

*  **Dependency Injection (DI)**
  Way of injecting properties to an object. Spring has 2 ways i.e. Constructor Injection & Setter Injection categorized on the basis of the method that is calling the object.

### Spring Annotations
* @Autowired
* @Controller
* @RequestMapping
* @SpringBootApplication


### Spring Project Disadvantages
* Spring Jar files version
* More configurations steps for DB
* Tomcat Server installation and configuration

### Spring Boot
* No need for jar files,
* No configuration files required, only application.properties file,
* Working with Annotations,
* Can work with stand-alone Applications,

SpringBoot Utilizes:
* Maven
* Eclipse STS
* Tomcat Server
* @RestController (for HTTP methods)


1. PBL Lectures & implement employee management full app
2. Refer Home Insurance App for standards
3. Create documents
4. Analyze modules (major features)
5. Assign modules both Spring and Angular
6. Start with Spring Boot - Data JPA backend & Test with Postman
7. After awhile start Angular development


Final Requirements
1. Documentation (All diagrams as well)
2. class diagrams
3. sequence and flow diagrams