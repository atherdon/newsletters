



# The Ugly Truth About Serverless Data Security

[Going serverless](https://hackernoon.com/tagged/serverless) is like farming out mundane tasks to professional dev teams. You get increased flexibility, accelerated innovation, and reduced [architecture costs](https://hackernoon.com/the-eleven-defining-characteristics-of-modern-software-architecture-o8113ehc). All these while focusing on core responsibilities and ultimate user experience. Sounds good, right? [Too good to be true](https://hackernoon.com/aws-reinvent-the-five-most-important-serverless-announcements-ce1v31f1). 

Managing a [complex infrastructure](https://hackernoon.com/serverless-vs-microservices-architecture-a-deep-dive-lw2u3w0b) always comes at a cost. In the case of serverless [infrastructure](https://hackernoon.com/the-state-of-infrastructure-security-amidst-this-pandemic-veu3u0d), its distributed nature gives a cyber breach lots of [golden opportunities](https://hackernoon.com/search?query=security). And it turns out that the major differentiator of serverless is also its archenemy that provides attackers with significantly [more points of entry](https://hackernoon.com/road-to-simplicity-hexagonal-architecture-part-one-6m123u0z). With that being said, let us dwell on the main five problems that underpin [security issues](https://hackernoon.com/phishing-top-threat-to-our-online-security-88t3uhg) today.



{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image1.gif][https://media.giphy.com/media/H4glhxCUA8aY3ivfym/giphy.gif][alt text]


## Serverless - Malware Just Found A New Home

In general, many well-known software risks like wrongly configured credentials or [SQL injection](https://hackernoon.com/sql-injections-beginners-guide-8t13z3v17) [make a comeback](https://hackernoon.com/solutions-to-counter-sql-injection-attacks-on-a-software-while-security-testing-w526r22wl) in serverless, but they manifest in a different way.


### Risk 1: Function Event-Data Injection

This risk takes place when unreliable or [attacker-controlled input](https://hackernoon.com/capture-and-forward-correlation-ids-through-different-lambda-event-sources-220c227c65f5) is delivered to an interpreter and gets run or [evaluated](https://hackernoon.com/webhooks-fun-with-n8n-and-mattermost-upb53yw0). The main reason for that is that we don’t always make sure the input is of the expected data type. And as most serverless architectures have a [myriad of event sources](https://hackernoon.com/a-simple-event-sourcing-example-with-snapshots-using-lambda-and-dynamodb-kfvu3ry9), it is not that hard to spark off a [serverless function](https://hackernoon.com/why-i-love-aws-lambda-reason-good-part-integration-auto-operation-scalable-nodejs-event-driven-b638b845dc84).



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image2.gif][https://media.giphy.com/media/LUIvcbR6yytz2/giphy.gif][alt text]



### Risk 2: Broken Authentication

Since serverless fosters a [microservices-oriented](https://hackernoon.com/connecting-an-apigee-edge-api-proxy-with-auth0-platform-pf1l3159) system design, applications often include a large number of functions, each with a unique target.

Being intertwined, [these functions](https://hackernoon.com/pipenv-and-requests-libraries-author-kenneth-reitz-talks-about-python-scalability-an-interview-jl2d343v) create overall system logic. However, some functions may disclose public web APIs, while others ingest events from various source types. So [unauthorized access](https://hackernoon.com/a-hacker-intercepted-your-wifi-traffic-stole-your-contacts-passwords-financial-data-heres-how-4fc0df9ff152) is a no-brainer in this case.



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image3.gif][https://media.giphy.com/media/daPFsPR6obZR1uRaV1/giphy-downsized.gif][alt text]




### Risk 3: Insecure Serverless Deployment Configuration

[Cloud providers](https://hackernoon.com/getting-started-with-cloud-computing-an-overview-il2k34oa) offer many customizations and configuration settings to fine-tune them for each unique need or task. Some of these [out-of-the-box configuration settings](https://hackernoon.com/serverless-the-future-of-development-xfs36d1) have alarming consequences on the overall security standpoint.

Thus, a [popular weak point](https://hackernoon.com/monolithic-and-microservice-architecture-all-you-need-to-know-hk17c32m0) for cloud-based storage is incorrectly configured cloud storage authentication. And if configurations are left unchecked, it may wreak [havoc on your security](https://hackernoon.com/developer-challenges-of-serverless-and-aws-lambda-8b8d5e299a34).



{IMAGE} 



![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image4.gif][https://media.giphy.com/media/vexp4GOO5r0OI/giphy.gif][alt text]


### Risk 4: Overprivileged Function Permissions and Roles

Serverless functions have access rights, such as the right to access a database. And if you have many functions, you’ll have the same amount of permissions. In an ideal world, these all [should be different rights](https://hackernoon.com/deploying-rocket-chat-on-kubernetes-a-complete-guide-77e55b26eb0) that are as restricted as possible.

[But who](https://hackernoon.com/building-serverless-microservices-with-python-84a25c1c6839) has the time to manage a zillion function authorizations? Most often, developers [find a shortcut](https://hackernoon.com/cicd-pipeline-for-nodejs-lambdas-on-aws-using-jest-serverless-framework-github-and-travisci-fl1n3zr4) by applying a "wildcard" permission model. In this case, serverless functions may end up in the [wrong hands](https://hackernoon.com/launched-first-open-source-headless-cms-running-on-aws-serverless-to-cut-hosting-bill-by-60percent-80percent-n1ct30ls) and used for [unplanned operations](https://hackernoon.com/4-elements-of-a-great-serverless-application-deployment-strategy-h5b3zol).



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image5.gif][https://media.giphy.com/media/Qa4JYD9iCwBT0tSY51/giphy.gif][alt text]




### Risk 5: Inadequate Function Monitoring and Logging

It’s essential to log and [monitor security-relevant events](https://hackernoon.com/crash-course-on-aws-cdk-and-serverless-with-rest-api-and-data-lake-analytical-querying-xd163wz4) instantly since it helps to uncover intruder attacks and impede data corruption. However, this architecture [hosts these functions](https://hackernoon.com/4-elements-of-a-great-serverless-application-deployment-strategy-h5b3zol) in a [cloud environment](https://hackernoon.com/aws-serverless-design-for-iot-hh1u3uyt), beyond the user's data center borderline.

And although many serverless providers supply highly efficient logging capabilities, these logs are in their [basic configuration](https://hackernoon.com/how-to-create-serverless-functions-with-openfaas-in-17-steps-u21l3y7m) and often fall short of delivering a full security event audit trail.



{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image6.gif][https://media.giphy.com/media/hHAsC92GLS4Ni/giphy.gif][alt text]


## Your Cut’N’Paste Summary

[While serverless](https://hackernoon.com/there-must-be-a-better-way-to-build-on-aws-ne1931h6) allows software engineers to give due regard to business logic and omit complex [server infrastructures](https://hackernoon.com/how-to-build-scalable-serverless-architecture-on-aws-yp1l31d6), it has a blot on the landscape. New, unprecedented security challenges like function data injection, [insecure deployment configuration](https://hackernoon.com/an-introduction-to-elasticsearch-lightning-fast-search-solutions-jm2o34si), and other beasts can overshadow the bright sides of this architecture.

But we are [not spreading fear](https://hackernoon.com/tagged/data-breach) or [slamming serverless](https://hackernoon.com/aws-step-functions-when-they-might-come-in-handy-y0i31x5). Remember that all these risks can be mitigated, [whereas knowing](https://hackernoon.com/top-five-data-breaches-witnessed-in-2020-twitter-marriot-zoom-magellan-health-and-mgm-ou33319m) nothing about them is your [major weakness](https://hackernoon.com/tagged/security-breaches).





{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image7.gif][https://media.giphy.com/media/yCyo0ZZFmpztS/giphy.gif][alt text]





# The Ugly Truth About Serverless Data Security

[Going serverless](https://hackernoon.com/tagged/serverless) is like farming out mundane tasks to professional dev teams. You get increased flexibility, accelerated innovation, and reduced [architecture costs](https://hackernoon.com/the-eleven-defining-characteristics-of-modern-software-architecture-o8113ehc). All these while focusing on core responsibilities and ultimate user experience. Sounds good, right? [Too good to be true](https://hackernoon.com/aws-reinvent-the-five-most-important-serverless-announcements-ce1v31f1). 

Managing a [complex infrastructure](https://hackernoon.com/serverless-vs-microservices-architecture-a-deep-dive-lw2u3w0b) always comes at a cost. In the case of serverless [infrastructure](https://hackernoon.com/the-state-of-infrastructure-security-amidst-this-pandemic-veu3u0d), its distributed nature gives a cyber breach lots of [golden opportunities](https://hackernoon.com/search?query=security). And it turns out that the major differentiator of serverless is also its archenemy that provides attackers with significantly [more points of entry](https://hackernoon.com/road-to-simplicity-hexagonal-architecture-part-one-6m123u0z). With that being said, let us dwell on the main five problems that underpin [security issues](https://hackernoon.com/phishing-top-threat-to-our-online-security-88t3uhg) today.



{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image1.gif][https://media.giphy.com/media/H4glhxCUA8aY3ivfym/giphy.gif][alt text]


## Serverless - Malware Just Found A New Home

In general, many well-known software risks like wrongly configured credentials or [SQL injection](https://hackernoon.com/sql-injections-beginners-guide-8t13z3v17) [make a comeback](https://hackernoon.com/solutions-to-counter-sql-injection-attacks-on-a-software-while-security-testing-w526r22wl) in serverless, but they manifest in a different way.


### Risk 1: Function Event-Data Injection

This risk takes place when unreliable or [attacker-controlled input](https://hackernoon.com/capture-and-forward-correlation-ids-through-different-lambda-event-sources-220c227c65f5) is delivered to an interpreter and gets run or [evaluated](https://hackernoon.com/webhooks-fun-with-n8n-and-mattermost-upb53yw0). The main reason for that is that we don’t always make sure the input is of the expected data type. And as most serverless architectures have a [myriad of event sources](https://hackernoon.com/a-simple-event-sourcing-example-with-snapshots-using-lambda-and-dynamodb-kfvu3ry9), it is not that hard to spark off a [serverless function](https://hackernoon.com/why-i-love-aws-lambda-reason-good-part-integration-auto-operation-scalable-nodejs-event-driven-b638b845dc84).



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image2.gif][https://media.giphy.com/media/LUIvcbR6yytz2/giphy.gif][alt text]



### Risk 2: Broken Authentication

Since serverless fosters a [microservices-oriented](https://hackernoon.com/connecting-an-apigee-edge-api-proxy-with-auth0-platform-pf1l3159) system design, applications often include a large number of functions, each with a unique target.

Being intertwined, [these functions](https://hackernoon.com/pipenv-and-requests-libraries-author-kenneth-reitz-talks-about-python-scalability-an-interview-jl2d343v) create overall system logic. However, some functions may disclose public web APIs, while others ingest events from various source types. So [unauthorized access](https://hackernoon.com/a-hacker-intercepted-your-wifi-traffic-stole-your-contacts-passwords-financial-data-heres-how-4fc0df9ff152) is a no-brainer in this case.



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image3.gif][https://media.giphy.com/media/daPFsPR6obZR1uRaV1/giphy-downsized.gif][alt text]




### Risk 3: Insecure Serverless Deployment Configuration

[Cloud providers](https://hackernoon.com/getting-started-with-cloud-computing-an-overview-il2k34oa) offer many customizations and configuration settings to fine-tune them for each unique need or task. Some of these [out-of-the-box configuration settings](https://hackernoon.com/serverless-the-future-of-development-xfs36d1) have alarming consequences on the overall security standpoint.

Thus, a [popular weak point](https://hackernoon.com/monolithic-and-microservice-architecture-all-you-need-to-know-hk17c32m0) for cloud-based storage is incorrectly configured cloud storage authentication. And if configurations are left unchecked, it may wreak [havoc on your security](https://hackernoon.com/developer-challenges-of-serverless-and-aws-lambda-8b8d5e299a34).



{IMAGE} 



![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image4.gif][https://media.giphy.com/media/vexp4GOO5r0OI/giphy.gif][alt text]


### Risk 4: Overprivileged Function Permissions and Roles

Serverless functions have access rights, such as the right to access a database. And if you have many functions, you’ll have the same amount of permissions. In an ideal world, these all [should be different rights](https://hackernoon.com/deploying-rocket-chat-on-kubernetes-a-complete-guide-77e55b26eb0) that are as restricted as possible.

[But who](https://hackernoon.com/building-serverless-microservices-with-python-84a25c1c6839) has the time to manage a zillion function authorizations? Most often, developers [find a shortcut](https://hackernoon.com/cicd-pipeline-for-nodejs-lambdas-on-aws-using-jest-serverless-framework-github-and-travisci-fl1n3zr4) by applying a "wildcard" permission model. In this case, serverless functions may end up in the [wrong hands](https://hackernoon.com/launched-first-open-source-headless-cms-running-on-aws-serverless-to-cut-hosting-bill-by-60percent-80percent-n1ct30ls) and used for [unplanned operations](https://hackernoon.com/4-elements-of-a-great-serverless-application-deployment-strategy-h5b3zol).



{IMAGE} 


![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image5.gif][https://media.giphy.com/media/Qa4JYD9iCwBT0tSY51/giphy.gif][alt text]




### Risk 5: Inadequate Function Monitoring and Logging

It’s essential to log and [monitor security-relevant events](https://hackernoon.com/crash-course-on-aws-cdk-and-serverless-with-rest-api-and-data-lake-analytical-querying-xd163wz4) instantly since it helps to uncover intruder attacks and impede data corruption. However, this architecture [hosts these functions](https://hackernoon.com/4-elements-of-a-great-serverless-application-deployment-strategy-h5b3zol) in a [cloud environment](https://hackernoon.com/aws-serverless-design-for-iot-hh1u3uyt), beyond the user's data center borderline.

And although many serverless providers supply highly efficient logging capabilities, these logs are in their [basic configuration](https://hackernoon.com/how-to-create-serverless-functions-with-openfaas-in-17-steps-u21l3y7m) and often fall short of delivering a full security event audit trail.



{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image6.gif][https://media.giphy.com/media/hHAsC92GLS4Ni/giphy.gif][alt text]


## Your Cut’N’Paste Summary

[While serverless](https://hackernoon.com/there-must-be-a-better-way-to-build-on-aws-ne1931h6) allows software engineers to give due regard to business logic and omit complex [server infrastructures](https://hackernoon.com/how-to-build-scalable-serverless-architecture-on-aws-yp1l31d6), it has a blot on the landscape. New, unprecedented security challenges like function data injection, [insecure deployment configuration](https://hackernoon.com/an-introduction-to-elasticsearch-lightning-fast-search-solutions-jm2o34si), and other beasts can overshadow the bright sides of this architecture.

But we are [not spreading fear](https://hackernoon.com/tagged/data-breach) or [slamming serverless](https://hackernoon.com/aws-step-functions-when-they-might-come-in-handy-y0i31x5). Remember that all these risks can be mitigated, [whereas knowing](https://hackernoon.com/top-five-data-breaches-witnessed-in-2020-twitter-marriot-zoom-magellan-health-and-mgm-ou33319m) nothing about them is your [major weakness](https://hackernoon.com/tagged/security-breaches).





{IMAGE} 

![https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2021/Feb/02.02/image7.gif][https://media.giphy.com/media/yCyo0ZZFmpztS/giphy.gif][alt text]

