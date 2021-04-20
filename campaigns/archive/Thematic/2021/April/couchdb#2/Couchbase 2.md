# Database Security: Lessons to Ward Off Cats

The year 2020 brought with it some unusual and extremely stressful situations — distance from loved ones, global supply chain shortages, attempts to explain the *Tiger King* to your friends — but it also acted as an important reminder. That we should *not* forget the value of [**cybersecurity**](https://hackernoon.com/6-things-to-know-if-you-want-to-become-a-cybersecurity-expert-7o6335e9).

[https://lh3.googleusercontent.com/i8RA49GUFXptuxayhCYLBATblX33D3bp5kDxnH48EpQ7Bp2yJsbHLFQ6MWiRIJsQQq4pZYs0rpZ0GAQQfpXQua5FOHNo4v18uoHRr-SnK_MbqUx1BvBsJnwOQYVtmLWCZbhvJZXO](https://lh3.googleusercontent.com/i8RA49GUFXptuxayhCYLBATblX33D3bp5kDxnH48EpQ7Bp2yJsbHLFQ6MWiRIJsQQq4pZYs0rpZ0GAQQfpXQua5FOHNo4v18uoHRr-SnK_MbqUx1BvBsJnwOQYVtmLWCZbhvJZXO)

*https://media.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif*

## *Beware of Cats*

The notorious [**‘meow' attacks**](https://hackernoon.com/learnings-from-the-meow-bot-attack-on-our-mongodb-databases-y22q3zs8) wiped almost **[4,000 unsecured databases](https://www.welivesecurity.com/2020/07/27/almost-4000-databases-wiped-meow-attacks/)**, including those of Elasticsearch and MongoDB. Threat actors targeted unsecured databases and destroyed all of their data.

[https://lh3.googleusercontent.com/v3qe7fJZZPFDcO2NC4SHgvlmgzHpsVfh6NsSU0eIqRw__IWt9QxNQvPO97uwHfqCq1Cvaenr1CRuHhhoAkOBMIQZHBvsKAISFLO8vkRvSAev3tBmq5pfe-bkc4glIoL1eALu-BdS](https://lh3.googleusercontent.com/v3qe7fJZZPFDcO2NC4SHgvlmgzHpsVfh6NsSU0eIqRw__IWt9QxNQvPO97uwHfqCq1Cvaenr1CRuHhhoAkOBMIQZHBvsKAISFLO8vkRvSAev3tBmq5pfe-bkc4glIoL1eALu-BdS)

*[https://media.giphy.com/media/NxwRDSUNzXshW/giphy.gif](https://media.giphy.com/media/NxwRDSUNzXshW/giphy.gif)*

What we have learned from these and other attacks is that in order to stay vigilant and proactive (especially if you easily miss telltale ‘meow signatures’ on server files) you should consider these easy steps:

1. **Start small by creating separate security credentials for each user when you need to grant administrative access to the database.**  *Avoid distributing connection strings.* Instead, assign each user their own login and set up the role-based access control feature.

    The latter allows you to restrict network access based on a person's role – whether it’s a database administrator or a BI tool. Those roles can be further customized to cater to the team needs, i.e. comically titled “Thingy Support Specialist.”

    [https://lh4.googleusercontent.com/artQLfbgVUWEdECWPsU5KDa67eqPpGQXCkSlKRjpW4Jy9BnYbkCgEwo34i-m0kiUGj0lpihqbv-G2AoEhvhHGwtRazVCn01BM9YBPWUwHY1komuGUeFl596Q4fzRUgMZgOTCbNBa](https://lh4.googleusercontent.com/artQLfbgVUWEdECWPsU5KDa67eqPpGQXCkSlKRjpW4Jy9BnYbkCgEwo34i-m0kiUGj0lpihqbv-G2AoEhvhHGwtRazVCn01BM9YBPWUwHY1komuGUeFl596Q4fzRUgMZgOTCbNBa)

    *[https://media.giphy.com/media/TUTlCcg2OOkGQ/giphy.gif](https://media.giphy.com/media/TUTlCcg2OOkGQ/giphy.gif)*

2. **Safeguard and consolidate your noble endeavors by limiting connections to the database, i.e. whitelisting.** This security practice passes a limited number of client connections from IP addresses that respond to entries in your project’s IP whitelist.

    Once you tick this box, go over to encrypting network traffic. The data doesn’t transport to your database with a magic wand. Typically, it goes through a network connection. That’s when [**encryption**](https://hackernoon.com/adding-encryption-to-a-fast-database-without-compromise-5u3b3yth) comes into play.

3. **Make sure that you implement [auditing](https://hackernoon.com/event-log-auditing-demystified-75b55879f069).** At the heart of any good security architecture is the ability to track user actions (similar to how you should manage your actual servers).

    Auditing allows you to filter the output of a particular user, database, collection, or source location. This creates a log for auditing any security incidents.

4. **Finally, do not stick with default settings!** This is a recipe for disaster.

Essentially, open-source databases have the toolbox to keep your data protected. All you have to do is to find your way around built-in settings and you are good to keep hackers and sneaky cats at bay.

Join us today to thank our newsletter sponsor, [Couchbase](https://bit.ly/3dFhtd6). Couchbase offers an award-winning, [distributed NoSQL cloud database](https://bit.ly/3dFhtd6). In a highly virtual world, big data is growing exponentially, so is our social presence on the Interweb. Let Couchbase help your business meet the demands of the modern world in a secure way.

**Important Disclaimer**: *No cats were harmed during the production of this newsletter. We love cats too and hope all they all are safe in this stressful time.*

[https://lh6.googleusercontent.com/M6Ef6sQqXA8NsLo7rJ8HFzblsZ2Pc77Ucdvbeuoz2dGTNJ5rycICobZ74U17lWp2A0EospwfhONTRdCpF2NW4iHyc69jizn6wSNmaS7JYwa51w2LWgmqpqa2AohPeLotoYp2uYkT](https://lh6.googleusercontent.com/M6Ef6sQqXA8NsLo7rJ8HFzblsZ2Pc77Ucdvbeuoz2dGTNJ5rycICobZ74U17lWp2A0EospwfhONTRdCpF2NW4iHyc69jizn6wSNmaS7JYwa51w2LWgmqpqa2AohPeLotoYp2uYkT)

*[https://media.giphy.com/media/THIvbrqPhSsTHxpuua/giphy.gif](https://media.giphy.com/media/THIvbrqPhSsTHxpuua/giphy.gif)*

*****

**["Join our writing contest and get a chance to win cool prizes".](https://hackernoon.com/the-decentralized-internet-writing-contest-fq1i35t4)**

***

**[Got a tech story to share with our readers?](https://hackernoon.com/signup)** Everything you've ever wanted to know about how to get published on Hacker Noon - **[get it here.](https://www.publish.hackernoon.com/)**
