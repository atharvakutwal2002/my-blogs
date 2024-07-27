---
title: "Visitor Design Patterns in Software Engineering"
date: "2024-07-28"
image: visitor-pattern.png
excerpt: The Visitor Design Pattern is a behavioral design pattern used to separate algorithms from the objects on which they operate.
isFeatured: true
---

## What is Visitor Design Pattern ?

The Visitor Design Pattern is a behavioral design pattern used to separate algorithms from the objects on which they operate. This pattern allows you to add new operations to existing object structures without modifying those structures. It is particularly useful when you need to perform a series of operations on objects with different types.

## Key Components of the Visitor Pattern
 ### Visitor Interface: 
 This defines the visit operations for each type of element (object). In your case, visitorInterface serves this role.

### Concrete Visitors: 
These classes implement the visitor interface and provide specific behavior for each type of element. For example, hotelVisitor, petrolPumpVisitor, and groceryVisitor are concrete visitors in your implementation.

### Element Interface: 
This is an interface that allows the visitor to perform operations on the elements. The cardInterface class in your code represents this.

### Concrete Elements: 
These are the classes that implement the element interface and accept visitors. creditCard, debitCard, and chargeCard are concrete elements in your example.

### Accept Method: 
Each concrete element class must have an accept method that takes a visitor as a parameter. This method calls the appropriate visit method on the visitor. In your case, accept methods are implemented in creditCard, debitCard, and chargeCard.

--------------
Let's consider one example scenario stated below .
Suppose we have a case like we have different types of payment cards and we have to provide different discounts based on the merchants and the cards .	         

| type_of_card   |      hotel      | Petrol Pump | grocery  |    
|----------------|:---------------:|------------:|---------:|  
| Debit_card     |        10%      |    5%       |    6%    |
| Credit_card    |        8%       |    4%       |    3%    |
| charge_card    |         6%      |    3%       |    1%    |


						
The person who is unaware about visitor design pattern will follow a generic and traditional approach of binding the operations or methods to the objects i.e. classes .
for e.g. 
```Java 
class debitCard{
	hotel(){};
	petrol_pump(){};
	grocery(){};
}	
class creditCard{
	hotel(){};
	petrol_pump(){};
	grocery(){};
}
class chargeCard{
	hotel(){};
	petrol_pump(){};
	grocery(){};
}	
```		
It may look convenient but consider onboarding merchants in future , the classes will increase in number and similarly , if the types of cards increase then also it is a tedious task to refactor the whole code .
To overcome this problem , visitor design pattern came into picture .
This design pattern moves operational logic into other classes making it easy to manage the increasing classes and methods . It involves creating visitor abstract class which will be inherited or implemented by concrete visitors (in our case hotelVisitor, petrolPumpVisitor , groceryVisitor will implement visitorInterface) and there will be classes for objects which also can be implemented from a common interface (in our case creditCard, debitCard, chargeCard will implement cardInterface ) . Visitors have operational logic and perform specific operations as per the object passed into it dynamically . This makes the card classes simpler and focused only on their core responsibilities .

```c++
#include<iostream>
using namespace std;

//pre-declaring the concrete classes 
class debitCard;
class creditCard;
class chargeCard;

//visitor interface 
class visitorInterface{ 
	public:
	virtual void visitDebitCard(debitCard * debit_card_element)=0;
	virtual void visitCreditCard(creditCard *credit_card_element)=0;
	virtual void visitChargeCard(chargeCard * charge_card_element)=0;
	/*
	.... we can have multiple visitor functions here which the concrete visitors will override 
	*/
};

//This card interface declares the accept method that allows a visitor to visit the elements.
class cardInterface{ 
	public:
	virtual void accept(visitorInterface * visitor_interface_element)=0;
};

//Each concrete element (creditCard, debitCard, chargeCard) implements the cardInterface and accepts a visitor. The "accept" method calls the appropriate visit method on the visitor.
class creditCard : public cardInterface{
	public:
	void accept(visitorInterface *visitor_interface_instance)override{
		visitor_interface_instance->visitCreditCard(this);
	}
};

class debitCard : public cardInterface{
	public:
	void accept(visitorInterface *visitor_interface_instance)override{
		visitor_interface_instance->visitDebitCard(this);
	}
};
class chargeCard : public cardInterface{
	public:
	void accept(visitorInterface *visitor_interface_instance)override{
		visitor_interface_instance->visitChargeCard(this);
	}
};


//Each concrete visitor (hotelVisitor, petrolPumpVisitor, groceryVisitor) implements the visitorInterface and provides specific behavior for each type of card.
class hotelVisitor : public visitorInterface{ //concrete visitor 
	public:
	void visitDebitCard(debitCard * debit_card_element)override{
		cout<<"Debit card visitor for hotel 10% discount"<<endl;
	}
	void visitCreditCard(creditCard * credit_card_element)override{
		cout<<"Credit card visitor for hotel 8% discount"<<endl;
	}
	void visitChargeCard(chargeCard * charge_card_element)override{
		cout<<"Charge card visitor for hotel 6% discount"<<endl;
	}	
};

class petrolPumpVisitor : public visitorInterface{ //concrete visitor 
	public:
	void visitDebitCard(debitCard * debit_card_element)override{
		cout<<"Debit card visitor for petrol pump 5% discount"<<endl;
	}
	void visitCreditCard(creditCard * credit_card_element)override{
		cout<<"Credit card visitor for petrol pump 4% discount"<<endl;
	}
	void visitChargeCard(chargeCard * charge_card_element)override{
		cout<<"Charge card visitor for petrol pump 3% discount"<<endl;
	}	
};

class groceryVisitor : public visitorInterface{ //concrete visitor 
	public:
	void visitDebitCard(debitCard * debit_card_element)override{
		cout<<"Debit card visitor for grocery 6% discount"<<endl;
	}
	void visitCreditCard(creditCard * credit_card_element)override{
		cout<<"Credit card visitor for grocery 3% discount"<<endl;
	}
	void visitChargeCard(chargeCard * charge_card_element)override{
		cout<<"Charge card visitor for grocery 1% discount"<<endl;
	}	
};



int main(){
	creditCard c1;
    debitCard d1;
    chargeCard ch1;

    hotelVisitor hv1;

    // Applying visitor to each card type
    c1.accept(&hv1);
    d1.accept(&hv1);
    ch1.accept(&hv1);

    return 0;
}

```

## Benefits of the Visitor Pattern in Your Code
### Separation of Concerns: 
The logic for discounts is separated from the card classes. This makes the card classes simpler and focused only on their core responsibilities.

### Extensibility: 
Adding new types of visitors (e.g., restaurantVisitor) or new card types can be done with minimal changes. You only need to add new classes without modifying the existing ones.

### Maintenance: 
Modifying discount calculations or adding new types of discounts can be done by updating or adding new visitor classes.
