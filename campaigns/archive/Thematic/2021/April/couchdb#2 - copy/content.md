
# **Step 1: Beware of Cats**


## Lessons in Online Database Security 



![alt_text](images/image1.gif "image_tooltip")
https://media.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif

The year 2020 brought with it some unusual and extremely stressful situations — distance from loved ones, global supply chain shortages, attempts to explain the _Tiger King _to your friends — but it also acted as an important reminder: That we should _not_ forget the value of[ cybersecurity](https://hackernoon.com/6-things-to-know-if-you-want-to-become-a-cybersecurity-expert-7o6335e9).

The notorious[ ‘meow' attacks](https://hackernoon.com/learnings-from-the-meow-bot-attack-on-our-mongodb-databases-y22q3zs8) resulted in thousands of hacked databases which included those of Elasticsearch and MongoDB. Threat actors targeted unsecured databases and destroyed all of their data. 


![alt_text](images/image2.gif "image_tooltip")
https://media.giphy.com/media/NxwRDSUNzXshW/giphy.gif

What we have learned from these and other attacks is that in order to stay vigilant and proactive — especially if you easily miss telltale ‘meow signatures’ on server files — you should consider following the below easy steps:

1. **If you need to grant administrative access to the[ database](https://hackernoon.com/10-ways-to-reduce-data-loss-and-potential-downtime-of-your-database-do9b359v), start small by creating separate security credentials for each user. ** _Make sure to avoid distributing connection strings. _Instead, assign each user their own login and set up the role-based access control feature.

    The latter allows you to restrict network access based on a person's role – whether it’s a database administrator or a BI tool. Those roles can be further customized to cater to the team needs, including the creation of custom and comical titles like: “Thingy Support Specialist.”


![alt_text](images/image3.gif "image_tooltip")
https://media.giphy.com/media/TUTlCcg2OOkGQ/giphy.gif



2. **Safeguard and consolidate your noble endeavors by limiting connections to the database, i.e. whitelisting.** This security practice passes a limited number of client connections from IP addresses that respond to entries in your project’s IP whitelist.

    Once you tick this box, go over to encrypting network traffic. The data doesn’t transport to your database with a magic wand. Typically, it goes through a network connection. That’s when[ encryption](https://hackernoon.com/adding-encryption-to-a-fast-database-without-compromise-5u3b3yth) comes into play.

3. **Make sure that you implement [auditing](https://hackernoon.com/event-log-auditing-demystified-75b55879f069).** At the heart of any good security architecture is the ability to track user actions (similar to how you should manage your actual servers). 

    Auditing allows you to filter the output of a particular user, database, collection, or source location. This creates a log for auditing any security incidents.

4.  **Finally, do not stick with default settings!** This is a recipe for disaster. 

Essentially, open-source databases have the toolbox to keep your data protected. All you have to do is to find your way around built-in settings and you are good to keep hackers and sneaky cats at bay.

**Important Disclaimer**: _No cats were harmed during the production of this newsletter. _

![alt_text](images/image4.gif "image_tooltip")
https://media.giphy.com/media/THIvbrqPhSsTHxpuua/giphy.gif

**[Got a tech story to share with our readers?](https://hackernoon.com/signup)** Everything you've ever wanted to know about how to get published on Hacker Noon -**[ get it here.](https://www.publish.hackernoon.com/)**
