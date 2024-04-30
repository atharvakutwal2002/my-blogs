---
title: Decorator design pattern
excerpt: The decorator pattern solves the problem of adding or altering functionalities of an object dynamically without altering its structure.
image: decorator-design-pattern.webp
isFeatured: true
date: '2024-05-01'
---

## What is the problem that this design pattern solves ?
Let's take a classical example of a coffee shop .
There is a coffee class . Suppose you want to give user choices to construct object with his choice for eg. Users can add extra whipped cream , mousse toppings or sweet cream . 
Now we need to define many subclasses to solve the above issue like coffee_with_extra_whipped_cream , coffee_with_mousse_toppings , coffee_with_sweet_cream . Now consider the user wants coffee with extra whipped cream as well as mousse toppings . Now we need to consider each and every combination and create subclasses for it . For this case you may say that it is convenient here . But if there are many possibilities for object creation , it is not a convenient method for defining subclasses for each and every object .
This is where the decorator design pattern comes into picture . The main idea in this design pattern is  there are concrete classes to construct base objects and there are decorator classes to decorate the object as per users choice . In the above case we will have a coffee class which will act as base class and it will create the base object . There will be the decorator classes like whipped_cream , mousse_toppings , sweet_cream and many more . The reference of the coffee object will be present in decorators and the functions will be present in the decorators to decorate the object as needed . 


```cpp
#include <iostream>
#include <string>

using namespace std;

// Abstract base class for the coffee
class Coffee {
public:
    virtual string getDescription() const = 0;
    virtual double cost() const = 0;
    virtual ~Coffee() {}
};

// Concrete implementation of a basic coffee
class SimpleCoffee : public Coffee {
public:
    string getDescription() const override {
        return "Simple Coffee";
    }

    double cost() const override {
        return 1.0; // Base price for simple coffee
    }
};

// Decorator base class
class CoffeeDecorator : public Coffee {
protected:
    Coffee* coffee;
public:
    CoffeeDecorator(Coffee* c) : coffee(c) {}

    string getDescription() const override {
        return coffee->getDescription();
    }

    double cost() const override {
        return coffee->cost();
    }
};

// Concrete decorator class for adding whipped cream
class WhippedCreamDecorator : public CoffeeDecorator {
public:
    WhippedCreamDecorator(Coffee* c) : CoffeeDecorator(c) {}

    string getDescription() const override {
        return coffee->getDescription() + ", Whipped Cream";
    }

    double cost() const override {
        return coffee->cost() + 0.5; // Extra cost for whipped cream
    }
};

// Concrete decorator class for adding mousse toppings
class MousseToppingsDecorator : public CoffeeDecorator {
public:
    MousseToppingsDecorator(Coffee* c) : CoffeeDecorator(c) {}

    string getDescription() const override {
        return coffee->getDescription() + ", Mousse Toppings";
    }

    double cost() const override {
        return coffee->cost() + 0.75; // Extra cost for mousse toppings
    }
};

// Concrete decorator class for adding sweet cream
class SweetCreamDecorator : public CoffeeDecorator {
public:
    SweetCreamDecorator(Coffee* c) : CoffeeDecorator(c) {}

    string getDescription() const override {
        return coffee->getDescription() + ", Sweet Cream";
    }

    double cost() const override {
        return coffee->cost() + 0.6; // Extra cost for sweet cream
    }
};

int main() {
    // Create a simple coffee
    Coffee* myCoffee = new SimpleCoffee();
    cout << "Description: " << myCoffee->getDescription() << ", Cost: $" << myCoffee->cost() << endl;

    // Add whipped cream
    myCoffee = new WhippedCreamDecorator(myCoffee);
    cout << "Description: " << myCoffee->getDescription() << ", Cost: $" << myCoffee->cost() << endl;

    // Add mousse toppings
    myCoffee = new MousseToppingsDecorator(myCoffee);
    cout << "Description: " << myCoffee->getDescription() << ", Cost: $" << myCoffee->cost() << endl;

    // Add sweet cream
    myCoffee = new SweetCreamDecorator(myCoffee);
    cout << "Description: " << myCoffee->getDescription() << ", Cost: $" << myCoffee->cost() << endl;

    delete myCoffee;

    return 0;
}

```