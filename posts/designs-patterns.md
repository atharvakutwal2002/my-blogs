---
title: "Design Patterns in Software Engineering"
date: "2023-12-30"
image: landing.png
excerpt: Design patterns are reusable solutions to common problems that arise during software design and development..
isFeatured: true
---

## What is Design Pattern ?

Design patterns are reusable solutions to common problems that arise during software design and development. They are like templates or blueprints that provide a way to structure code to solve specific types of problems. Design patterns are not complete solutions or ready-made code; instead, they offer general guidelines and best practices.

These patterns help developers create software that is more modular, flexible, and maintainable. They encapsulate proven design principles and promote code organization that facilitates easier understanding and modification of the software.

## There are many design patterns which can be categorized as belows 

### 1. Creational Design Pattern
    Factory Pattern , Builder Pattern , Singleton Pattern

### 2. Structural Desgin Pattern
    Proxy pattern , Adaptor pattern 

### 3. Behavioral Design Pattern
    Observer Pattern , Iterator Pattern

# Lets discuss above all in detail below 

## Factory Pattern 

The Factory Pattern is a creational design pattern that provides an interface for creating instances of a class, but allows subclasses to alter the type of objects that will be created. In other words, it defines an interface or abstract class for creating objects, but the actual instantiation is delegated to its subclasses.

Product Interface/Abstract Class:

This defines the interface or abstract class for the object to be created.

Concrete Products:

These are the actual classes that implement the Product interface or extend the Product abstract class. Each concrete product provides a specific implementation of the object to be created.

Creator Interface/Abstract Class:

This declares the factory method that returns an object of type Product. The Creator class may also include some default implementation for other methods.

Concrete Creators:

These are the classes that implement the Creator interface or extend the Creator abstract class. Each concrete creator class provides an implementation for the factory method, which creates and returns a specific instance of the Product.

```java
// Step 1: Product Interface
interface Product {
    void create();
}

// Step 2: Concrete Products
class ConcreteProductA implements Product {
    @Override
    public void create() {
        System.out.println("Product A is created");
    }
}

class ConcreteProductB implements Product {
    @Override
    public void create() {
        System.out.println("Product B is created");
    }
}

// Step 3: Creator Interface
interface Creator {
    Product factoryMethod();
    void operation();
}

// Step 4: Concrete Creators
class ConcreteCreatorA implements Creator {
    @Override
    public Product factoryMethod() {
        return new ConcreteProductA();
    }

    @Override
    public void operation() {
        Product product = factoryMethod();
        System.out.println("Creator A uses " + product.getClass().getSimpleName());
    }
}

class ConcreteCreatorB implements Creator {
    @Override
    public Product factoryMethod() {
        return new ConcreteProductB();
    }

    @Override
    public void operation() {
        Product product = factoryMethod();
        System.out.println("Creator B uses " + product.getClass().getSimpleName());
    }
}

// Step 5: Client Code
public class FactoryPatternExample {
    public static void main(String[] args) {
        // Using ConcreteCreatorA
        Creator creatorA = new ConcreteCreatorA(); // Creating an instance of ConcreteCreatorA
        creatorA.operation(); // Output: Creator A uses ConcreteProductA

        // Using ConcreteCreatorB
        Creator creatorB = new ConcreteCreatorB(); // Creating an instance of ConcreteCreatorB
        creatorB.operation(); // Output: Creator B uses ConcreteProductB
    }
}

```
Product Interface (Step 1):

Product interface declares the method create(), which is implemented by concrete products (ConcreteProductA and ConcreteProductB).

Concrete Products (Step 2):

ConcreteProductA and ConcreteProductB are the concrete implementations of the Product interface. They provide specific implementations of the create() method.

Creator Interface (Step 3):

Creator interface declares two methods: factoryMethod() and operation(). The factoryMethod() is responsible for creating a product, and operation() is a method used by clients to interact with the created product.

Concrete Creators (Step 4):

ConcreteCreatorA and ConcreteCreatorB are concrete implementations of the Creator interface. They provide specific implementations for the factoryMethod() and operation() methods.

Client Code (Step 5):

In the main method of the FactoryPatternExample class, we create instances of ConcreteCreatorA and ConcreteCreatorB and call their operation() methods. This demonstrates how different creators can create different products without the client knowing the concrete product classes.

## Builder Pattern 

The Builder Pattern is a creational design pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It is especially useful when an object has a large number of parameters, and you want to provide a more readable and maintainable way to construct instances of that object. The Builder Pattern allows you to construct a product step by step, specifying only the desired features, and providing a more fluent and readable way to create complex objects.

```js
// Step 1: Product class with a complex construction process
class Product {
    private String part1;
    private String part2;
    private String part3;

    // Private constructor to force the use of the builder
    private Product() {}

    // Getter methods for the parts

    public String getPart1() {
        return part1;
    }

    public String getPart2() {
        return part2;
    }

    public String getPart3() {
        return part3;
    }

    // Step 2: Builder interface
    interface Builder {
        Builder buildPart1(String part1);
        Builder buildPart2(String part2);
        Builder buildPart3(String part3);
        Product build(); // Build method to create the final product
    }

    // Step 3: Concrete Builder class implementing the Builder interface
    static class ConcreteBuilder implements Builder {
        private Product product = new Product();

        @Override
        public Builder buildPart1(String part1) {
            product.part1 = part1;
            return this;
        }

        @Override
        public Builder buildPart2(String part2) {
            product.part2 = part2;
            return this;
        }

        @Override
        public Builder buildPart3(String part3) {
            product.part3 = part3;
            return this;
        }

        @Override
        public Product build() {
            return product;
        }
    }

    // Step 4: Director class to orchestrate the construction process
    static class Director {
        public Product construct(Builder builder) {
            return builder
                    .buildPart1("Part 1")
                    .buildPart2("Part 2")
                    .buildPart3("Part 3")
                    .build();
        }
    }
}

// Step 5: Client Code
public class BuilderPatternExample {
    public static void main(String[] args) {
        // Creating a builder
        Product.Builder builder = new Product.ConcreteBuilder();

        // Creating a director
        Product.Director director = new Product.Director();

        // Constructing the product using the director and builder
        Product product = director.construct(builder);

        // Accessing the parts of the constructed product
        System.out.println("Part 1: " + product.getPart1());
        System.out.println("Part 2: " + product.getPart2());
        System.out.println("Part 3: " + product.getPart3());
    }
}

```

Product class (Step 1):

Represents the complex object to be constructed.
It has a private constructor to enforce the use of the builder.

Builder interface (Step 2):

Declares the methods to build different parts of the product and a build() method to create the final product.

Concrete Builder class (Step 3):

Implements the builder interface.
Constructs and assembles parts of the product.

Director class (Step 4):

Orchestrates the construction process using a builder.
Defines a method (construct) that takes a builder and constructs a product using it.

Client Code (Step 5):

Creates a builder (ConcreteBuilder).
Creates a director.
Uses the director to construct a product through the builder.
Accesses and prints the parts of the constructed product.

## Singleton Design Pattern 

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is used when exactly one instance of a class is needed to coordinate actions across the system. The Singleton Pattern is often employed for logging, driver objects, caching, thread pools, database connections, and more. The Singleton Pattern ensures that there is only one instance of the class, and it provides a global point of access to that instance. The lazy initialization technique in the example delays the creation of the instance until it is first needed, improving performance.

```js
// Step 1: Singleton class
public class Singleton {
    // Step 2: Private static instance variable
    private static Singleton instance;

    // Step 3: Private constructor to prevent instantiation from outside
    private Singleton() {
        // Private constructor to prevent instantiation
    }

    // Step 4: Public static method to get the instance
    public static Singleton getInstance() {
        // Step 5: Lazy initialization (creating the instance only when needed)
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Other methods and properties of the singleton
    public void showMessage() {
        System.out.println("Hello, I am a Singleton!");
    }
}

// Step 6: Client Code
public class SingletonPatternExample {
    public static void main(String[] args) {
        // Attempt to create instances directly (will not work)
        // Singleton obj = new Singleton(); // Error: Singleton() has private access in Singleton

        // Get the singleton instance using the public method
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();

        // Both instances should be the same
        System.out.println(singleton1 == singleton2); // Output: true

        // Using the singleton instance
        singleton1.showMessage(); // Output: Hello, I am a Singleton!
        singleton2.showMessage(); // Output: Hello, I am a Singleton!
    }
}

```
Singleton class (Step 1):

Represents the singleton class.

Private static instance variable (Step 2):

Holds the single instance of the class.

Private constructor (Step 3):

Ensures that the class cannot be instantiated from outside the class.

Public static method to get the instance (Step 4):

Provides a global point of access to the single instance.

Lazy initialization (Step 5):

Creates the instance only when it is needed, making it efficient.

Client Code (Step 6):

Demonstrates the usage of the singleton pattern.
Attempts to create instances directly result in a compilation error.
Gets the singleton instance using the getInstance() method.
Verifies that both instances obtained are the same.
Calls a method on the singleton instance.

## Iterator Pattern

The Iterator Pattern is a behavioral design pattern that provides a way to access elements of an aggregate object sequentially without exposing its underlying representation. It defines a common interface for iterating over various types of collections, allowing the client to traverse the elements of a collection without needing to know the specific details of its implementation. The Iterator Pattern helps decouple the client code from the internal structure of the collection, providing a way to iterate over elements without exposing the details of the collection's implementation. This promotes flexibility and allows different types of collections to be iterated in a uniform way.

```js
// Step 1: Iterator interface
interface Iterator<T> {
    boolean hasNext();
    T next();
}

// Step 2: Aggregate interface
interface Aggregate {
    Iterator<String> createIterator();
}

// Step 3: Concrete Iterator class
class ConcreteIterator implements Iterator<String> {
    private String[] elements;
    private int index = 0;

    public ConcreteIterator(String[] elements) {
        this.elements = elements;
    }

    @Override
    public boolean hasNext() {
        return index < elements.length;
    }

    @Override
    public String next() {
        if (hasNext()) {
            return elements[index++];
        }
        return null;
    }
}

// Step 4: Concrete Aggregate class
class ConcreteAggregate implements Aggregate {
    private String[] elements;

    public ConcreteAggregate(String[] elements) {
        this.elements = elements;
    }

    @Override
    public Iterator<String> createIterator() {
        return new ConcreteIterator(elements);
    }
}

// Step 5: Client Code
public class IteratorPatternExample {
    public static void main(String[] args) {
        // Creating an aggregate with elements
        String[] elements = {"Apple", "Banana", "Orange", "Grapes"};
        Aggregate aggregate = new ConcreteAggregate(elements);

        // Creating an iterator for the aggregate
        Iterator<String> iterator = aggregate.createIterator();

        // Using the iterator to traverse elements
        while (iterator.hasNext()) {
            String element = iterator.next();
            System.out.println("Element: " + element);
        }
    }
}

```
Iterator interface (Step 1):

Defines the interface for the iterator, including methods like hasNext() to check for the next element and next() to retrieve the next element.

Aggregate interface (Step 2):

Declares the method createIterator(), which creates an iterator for traversing elements of the aggregate.

Concrete Iterator class (Step 3):

Implements the iterator interface.
Maintains the position in the collection and provides methods to check for the next element and retrieve it.

Concrete Aggregate class (Step 4):

Implements the aggregate interface.
Provides a method to create an iterator for the specific collection.

Client Code (Step 5):

Creates an aggregate (ConcreteAggregate) with a set of elements.
Obtains an iterator from the aggregate using the createIterator() method.
Uses the iterator to traverse the elements of the aggregate without exposing its internal representation.

## Adaptor Design Pattern

The Adapter Pattern is a structural design pattern that allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects. This pattern involves a single class called the Adapter, which is responsible for joining functionalities of independent or incompatible interfaces.

```js
// Step 1: Target Interface (the expected interface by the client)
interface Target {
    void request();
}

// Step 2: Adaptee (an existing class with a different interface)
class Adaptee {
    void specificRequest() {
        System.out.println("Adaptee's specific request");
    }
}

// Step 3: Adapter class implementing the Target interface
class Adapter implements Target {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// Step 4: Client Code
public class AdapterPatternExample {
    public static void main(String[] args) {
        // Creating an instance of the Adaptee
        Adaptee adaptee = new Adaptee();

        // Creating an instance of the Adapter, passing the Adaptee to it
        Target adapter = new Adapter(adaptee);

        // Using the Adapter to make a request (compatible with Target interface)
        adapter.request(); // Output: Adaptee's specific request
    }
}

```

Target Interface (Step 1):

Target is the interface expected by the client. In this example, it declares the request() method.

Adaptee (Step 2):

Adaptee is an existing class with a different interface. It has a method called specificRequest().

Adapter class (Step 3):

Adapter is a class that implements the Target interface and contains an instance of the Adaptee.
The request() method of the Adapter calls the specificRequest() method of the Adaptee, making it compatible with the Target interface.

Client Code (Step 4):

Creates an instance of the Adaptee.
Creates an instance of the Adapter, passing the Adaptee to it.
Uses the Adapter to make a request, which internally invokes the specificRequest() method of the Adaptee.

