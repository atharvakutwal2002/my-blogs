---
title: 'CAP theorem for Databases'
date: '2024-01-03'
image: landing.png
excerpt: The theorem states that in a distributed system, you can only achieve two out of the three Consistency, Availability, and Partition Tolerance. You have to make a choice based on the requirements of your system. If the network is unstable (partition-tolerant), and you need to choose between consistency and availability during such times.
isFeatured: true
---

# CAP theorem can be explained with the following trade-off:

## Consistency (C) 
Everyone sees the same data at the same time.

## Availability (A)
Every request gets a response, without guaranteeing it's the most recent data.

## Partition Tolerance (P)
The system continues to work despite network issues or "partitions."

![Create routes via your file + folder structure](cap.png)

The CAP theorem asserts that a distributed system can achieve at most two out of these three properties simultaneously. In the presence of a network partition, a system has to choose between maintaining consistency or availability. In other words:

If a system prioritizes Consistency and Partition Tolerance, it may experience unavailability during network partitions.

If a system prioritizes Availability and Partition Tolerance, it may sacrifice consistency, potentially serving stale or conflicting data during network partitions.

If a system prioritizes Consistency and Availability, it may choose to halt operations during network partitions to ensure that all nodes have consistent data.

# Let's use some scenarios to illustrate the trade-offs in the CAP theorem:

## Scenario 1: Prioritizing Consistency and Partition Tolerance

Consistency (C): All nodes have the same data at the same time.

Availability (A): The system may become unavailable during network partitions to ensure that all nodes have consistent data.

Partition Tolerance (P): The system can still function even if there are network issues.

Example: Imagine a banking system where transferring money between accounts needs to be perfectly consistent. During a network partition, the system may choose to become temporarily unavailable to prevent any inconsistencies in account balances.

## Scenario 2: Prioritizing Availability and Partition Tolerance

Consistency (C): There might be a delay in propagating updates to all nodes, so not everyone sees the latest data immediately.

Availability (A): The system remains operational even during network partitions, and clients receive responses.

Partition Tolerance (P): The system can handle network partitions without sacrificing availability.

Example: Consider a social media feed where the latest posts might not be instantly visible to all users during network issues. However, the system remains available, allowing users to interact with the content that is currently accessible.

## Scenario 3: Prioritizing Consistency and Availability

Consistency (C): All nodes have the same data at the same time.

Availability (A): The system may choose to become unavailable during network partitions to ensure that all nodes have consistent data.

Partition Tolerance (P): The system can still function even if there are network issues.

Example: In a stock trading platform, it's crucial that all users see the same stock prices. During a network partition, the system might temporarily halt trading to avoid discrepancies in stock values.


