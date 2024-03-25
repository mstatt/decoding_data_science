var labelType, useGradients, nativeTextSupport, animate;

(function () {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport
            && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function (text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};


function init() {
    //init data
    var json = {
        id: "00_01",
        name: "Your Story",
        children: [

            {
                id: "PS_1D",
                name: ".05 Problem Set",
                data: {
                    relation: "<h4>Task</h4><b>Description:</b><br/>In a general sense, a problem set is a collection of exercises or questions designed to test and develop your knowledge and skills in a particular subject.<br/><br/><b>D.D.S. Problem Set:</b> <br/><u>Develop a Novel solution using A.I. (3 hours)</u> <ul> <li>Determine Problem or Opportunity: (30min)</li> <li>Develp Course of Action: (30 min)<br/> Determine technologies: Model, API, Hosting, UI<br/> <li>Determine needs: Data, Compute, etc.</li> <li>Considerations:<br/> Data, Testing, Domain, (public) Github repository</li> <li>Development: (1 hour)</li> <li>Testing/Fixes: (30 min)</li> <li>Deployment (30 min)</li> </ul><br/><font color='Red'>*** You are responsible for all required resources. ***</font>"
                },
                children: []
            },

            {
                id: "TP_1D",
                name: "Start: Talking Points",
                data: {
                    relation: '<h4>Talking Points</h4><b>Description:</b><br/><ul> <li>Just opinions and observations, NO ONE has a monopoly on the CORRECT perspective</li><li>Data Science is to A.I. what fuel is to engines.</li><li>There are only 3 domains of A.I. 1) Machine Learning, N.L.P. and Computer Vision. THATS ALL.</li><li>The future of our world will be video/Audio, not text or documents. Its how we see and process the world so A.I. will adjust and is adjusting.<br/><br/>See Yann LeCun: <a href="multi-sensory_input.mp4"  target="_blank">Multi-Sensory Input</a></li> <li>A.I. will not be the downfall of Developers, in the near term (Devin from Cognition and Jensen Haung telling people to stop learning to code)</li> <li>What is your "End Game"? Build tech, a company or engineer humanity? (Social Media has engineered humanity-Doom Scrolling, Shrinking attention spans)</li> <li>Make it matter, Make it Impactful, Make it Important, Make it better and bigger.</li> <li>Software matters, it runs our world, what we build and deploy affects real human lives. YOU MATTER, WHAT you build Matters.</li> <li>If you are the 1st you succeeded.</li> <li>Falcons.ai is all about 2 things: A.I. for good and to build something the internet has never seen before!</li><li>Falcons.ai is a collaboration and because he understands this, I have never told Nizam, NO</li> <li>PreciseAG, Videre, Fear Mongering, Distress Signals Analysis, Unintended Consequemnces, Plague Detection, Cogito, Tempestas, NSFW detection (500k)</li> </ul>'
                },
                children: []
            },

            {
                id: "NA_1",
                name: ".01 Interresting",
                data: {
                    relation: "<h4> Decoding Data Science Presentation</h4><b>Description:</b> Initially I just wanted to start out with a discussion of amazing things you and I have read regarding A.I."
                },
                children: [
                    {
                        id: "NLP_H1",
                        name: "Stealing Power",
                        data: {
                            relation: '<h4>A.I. Stealing Energy</h4><b>Description:</b>The danger of artificial intelligence isnt that its going to rebel against us, but that its going to do exactly what we ask it to do, says AI researcher Janelle Shane. Sharing the weird, sometimes alarming antics of AI algorithms as they try to solve human problems -- like creating new ice cream flavors or recognizing cars on the road -- Shane shows why AI doesnt yet measure up to real brains. <br/>The research spoken about by Janelle Shane regarding AI hacking math errors in simulations to steal energy.  <br/><a href="Janelle_Shane_TED-Talk.mp4" target="_blank">Janelle Shane: Stealing Power</a> <br/> <a href="The Surprising Creativity of Digital Evolution.pdf" target="_blank">Research Paper</a><br/><a href="Free-Energy.png" target="_blank">Specific Content</a>'
                        },
                        children: []
                    },

                    {
                        id: "NLP_HO1",
                        name: "Language Creation",
                        data: {
                            relation: '<h4>Models creating Language</h4><b>Description:</b>Facebook shut down an artificial intelligence engine after developers discovered that the AI had created its own unique language that humans can’t understand. Researchers at the Facebook AI Research Lab (FAIR) found that the chatbots had deviated from the script and were communicating in a new language developed without human input. It is as concerning as it is amazing – simultaneously a glimpse of both the awesome and horrifying potential of AI. <br/> <a href="https://www.forbes.com/sites/tonybradley/2017/07/31/facebook-ai-creates-its-own-language-in-creepy-preview-of-our-potential-future/?sh=6d91ae68292c" target="_blank">Creepy Language</a>'
                        },
                        children: [
                        ]
                    },

                    {
                        id: "NLP_L2",
                        name: "Password Theft",
                        data: {
                            relation: '<h4>A.I. can hear your password</h4><b>Description:</b>AI Steals Passwords by Listening to Keystrokes With Scary Accuracy: The AI model trained on typing recorded over a smartphone was able to steal passwords with 95% accuracy. <br/> <a href="https://www.darkreading.com/cyberattacks-data-breaches/ai-model-can-replicate-password-listening-to-keystrokes" target="_blank">Listening to Keystrokes</a>'
                        },
                        children: [
                        ]
                    },

                ]
            }, //Organization


            {
                id: "LLM_1",
                name: ".02 LLM's",
                data: {
                    relation: "<h4> Large Language Models</h4><b>Description:</b>Large language models are super-powered AI programs trained on massive amounts of text data. This training allows them to understand the relationships between words and concepts, letting them perform a variety of tasks like writing different kinds of creative content and answering your questions in an informative way.  "
                },
                children: [
                    {
                        id: "NLP_SM1_SEO1",
                        name: "Types of LLM's",
                        data: {
                            relation: "<h4>3 Types of LLM's</h4><b>Description:</b><br/><ul><li>Large: >= 64B Llama-70B</li><li>Medium: <> 64B - 13B Falcon 40B</li><li>Small: < 13B Gemma 2B</li></ul>Parameters are basically a compressed representation of the training text. "
                        },
                        children: []
                    },
                    {
                        id: "NLP_SM1_CM1",
                        name: "Parameters",
                        data: {
                            relation: "<h4>What are Parameters?</h4> <b>Description:</b><br/> <p>Magical parameters: Imagine you're building a giant Lego model to show a whole city. <p>To make it look real, you need tons of different Lego pieces - bricks for buildings, plates for roads, slopes for hills. These Lego pieces are like the parameters in a large language model (LLM).<p>Here's how it works:<br/>More parameters, more complexity: The more Lego pieces you have, the more detailed and fancy your city can be. Similarly, an LLM with more parameters can handle more complex stuff, like understanding different writing styles or even translating languages.Parameters learn from data: As you build your Lego city, you follow the instructions or picture. An LLM learns from the text it reads. The parameters adjust based on what the LLM sees, like figuring out that 'blue' often goes with 'sky' but not 'soup.'Parameters make predictions: Just like you decide which Lego piece goes next in your city, the LLM uses its parameters to guess what word should come after another. This lets it complete sentences, write stories, or answer your questions in a natural way.So, LLM parameters are like the building blocks that help the model understand and respond to language in a creative way, all thanks to the massive amount of text it's been trained on!"
                        },
                        children: []
                    },
                    {
                        id: "NLP_Train_Tune",
                        name: "Preparation",
                        data: {
                            relation: "<h4>Training or Fine-tuning</h4><b>Description:</b><br/><p><b>Training:</b> <br/> Involves starting from scratch. The model's internal parameters (like weights and biases) are initialized randomly and then adjusted as the model learns from a dataset.<br/> This process requires a significant amount of data and computational power to achieve good results.<br/> <p><b>Fine-tuning:</b><br/> Leverages an already trained model. This pre-trained model has already learned general features from a large dataset.<br/> Fine-tuning then focuses on adapting the pre-trained model to a specific task by making adjustments to its final layers.<br/> This is a more efficient approach, especially when dealing with smaller datasets for specialized tasks."
                        },
                        children: []
                    },
                ]
            },


            {
                id: "PROC_1",
                name: ".03 The Process",
                data: {
                    relation: "<h4> Our Innovation Process</h4><b>Description:</b>I would like to be crystal clear: NO ONE HAS A MONOPOLY ON A PROCESS FOR INNOVATION, NO ONE! There are methodologies for capitalizing on or executing a guideline of steps. If anyone did have a process for innovation; they would rule the world in less than 12 months time and no one would ever overtake them. They could churn out advance technologies like a chicken laying eggs."
                },
                children: [

                    {
                        id: "PROC_1_Ground_Rules",
                        name: "Ground Rules",
                        data: {
                            relation: '<h4>Basic Rules</h4><b>Description:</b><br/> I try to emphasize the impoortance of having smart people working on NEW things. <br/>Why small or "MeToo" projects suck? They waste intellectual capacity.<br/>Imagine a team of flies connecting to your brain to find the next pile of shit, how under/mis-used would you feel. <br/> <br/><a href="Peter_Thiel_2014.mp4"  target="_blank">Peter_Thiel Better than Competing</a> <br/><br/>Avoid the Intellectual Laziness of the following: <ul> <li>Translation Services</li> <li>Recommendation Engine</li> <li>Summarization Service</li> <li>Course Creation</li> <li>Marketing Campaigns Generator</li> <li>Creative Writing Services</li> <li>Personal Shopping Assistants</li> <li>Tone Detection and Sentiment Analysis</li> <li>Social Media Management</li> <li>Legal Document Review and Analysis</li> <li>Mood Tracking and Emotional Wellness Support</li> <li>Food & Nutrition Consultancy</li> <li>Personal Financial Management</li> <li>Event Planning Assistance</li> <li>Healthcare Consultancy</li> <li>Chat Therapists</li> <li>Sales /Customer Service Chatbots</li> <li>Recipie/Cooking Assistants</li> <li>R.A.G. Solutions</li> </ul> <p>*** Try to stay away from generators unless its a uniquely novel solution*** <br/><a href="https://www.youtube.com/watch?v=6D0Un1RWggA"  target="_blank">Chaos Engineering</a> <br/>'
                        },
                        children: [
                            {
                                id: "CVsdfgsdf_R1",
                                name: "Innovation",
                                data: {
                                    relation: '<h4>Innovation</h4><b>Description:</b><br/> Lets pick a direction, are we going to solve a problem or capitalize on an opportunity?<br/><br/><a href="Competition.mp4"  target="_blank">Jensen Huang Competition</a> <br/><br/> '
                                },
                                children: [

                                    {
                                        id: "CVsdfgsd_M1",
                                        name: "Opportunities/Problems",
                                        data: {
                                            relation: "<h4>Opportunities</h4><b>Description:</b><br/>Most Gain or Opportunities are unlimited, on the contrary all risk or cost is finite. Nicolas Nasim Taleb calls this Optionality (Unknown gains vs Known Losses)<br/><br/> In the case of problems: What questions are we asking about the problem, What other questions should we be asking?"
                                        },
                                        children: [
                                            {
                                                id: "CVsdfgsd_M1D",
                                                name: "Efficiency",
                                                data: {
                                                    relation: "<h4>Reduces Cost</h4><b>Description:</b><br/>Software can enhance eficiency in processes by reducing the number steps required for a given task, thus reducing the error rate and enhancing the cost savings over time. Through algorithms and data analysis, software can detect patterns of inefficiencies that humans might overlook, leading to better options for decision-making."
                                                },
                                                children: [

                                                    {
                                                        id: "Problems_A1",
                                                        name: "Problems",
                                                        data: {
                                                            relation: "<h4>Problems</h4><b>Description:</b><br/>Software can be utilized to provide solutions to human or organizational problems by automating repetitive tasks, streamlining processes, and enhancing efficiency. Through custom development or deployment of existing solutions, software can address specific needs such as data management, communication, and decision-making. By leveraging technology, software enables optimization of resources and facilitates innovation, ultimately driving productivity and achieving desired outcomes."
                                                        },
                                                        children: [

                                                        ]
                                                    },

                                                ]
                                            },

                                            {
                                                id: "CVsdfgsd_M1A",
                                                name: "Accuracy",
                                                data: {
                                                    relation: "<h4>Highly Accurate</h4><b>Description:</b><br/>Software can enhance accuracy in processes by automating repetitive tasks, reducing the margin for human error. Through algorithms and data analysis, software can detect patterns and anomalies that humans might overlook, leading to more precise decision-making. Additionally, software can provide real-time feedback and insights, allowing for continuous improvement and refinement of processes for increased accuracy over time."
                                                },
                                                children: [

                                                    {
                                                        id: "Problems_A1",
                                                        name: "Problems",
                                                        data: {
                                                            relation: "<h4>Problems</h4><b>Description:</b><br/>Software can be utilized to provide solutions to human or organizational problems by automating repetitive tasks, streamlining processes, and enhancing efficiency. Through custom development or deployment of existing solutions, software can address specific needs such as data management, communication, and decision-making. By leveraging technology, software enables optimization of resources and facilitates innovation, ultimately driving productivity and achieving desired outcomes."
                                                        },
                                                        children: [

                                                        ]
                                                    },

                                                ]
                                            },
                                            {
                                                id: "CVsdfgsd_M1C",
                                                name: "Accessibility",
                                                data: {
                                                    relation: "<h4>Acess to advanced technology</h4><b>Description:</b><br/>To a technology or even new information.<br/><br/>Software can enhance public accessibility of advanced technologies by providing intuitive user interfaces that simplify complex processes, making them more understandable for a wider audience. Additionally, software can enable remote access and control, allowing users to interact with advanced technologies from anywhere, breaking down geographical barriers. Moreover, through customization and personalization features, software can adapt to individual needs and preferences, ensuring inclusivity for diverse users. "
                                                },
                                                children: [
                                                    {
                                                        id: "Problems_A1",
                                                        name: "Problems",
                                                        data: {
                                                            relation: "<h4>Problems</h4><b>Description:</b><br/>Software can be utilized to provide solutions to human or organizational problems by automating repetitive tasks, streamlining processes, and enhancing efficiency. Through custom development or deployment of existing solutions, software can address specific needs such as data management, communication, and decision-making. By leveraging technology, software enables optimization of resources and facilitates innovation, ultimately driving productivity and achieving desired outcomes."
                                                        },
                                                        children: [

                                                            {
                                                                id: "Problems_A1A",
                                                                name: "Complicated",
                                                                data: {
                                                                    relation: "<h4>Complicated</h4><b>Description:</b><br/>Complicated problems often entail a multitude of intricate steps or fine details that require careful consideration. They typically involve a convoluted interplay of various factors, necessitating thorough analysis and precise execution. Successfully addressing such issues demands a systematic approach, meticulous planning, and the ability to navigate through complexity with clarity and precision."
                                                                },
                                                                children: [
                                                                    {
                                                                        id: "software_1",
                                                                        name: "Rules_based",
                                                                        data: {
                                                                            relation: "<h4>Rules Based</h4><b>Description:</b><br/>Rules-based software refers to a type of program that operates by following a predefined set of logical instructions, or rules, to make decisions or perform actions. These rules are typically established by developers or users to dictate how the software behaves under various conditions. The software evaluates inputs against these rules and executes actions or produces outputs accordingly, making it useful for tasks requiring consistent, predictable decision-making processes."
                                                                        },
                                                                        children: [
                                                                            {
                                                                                id: "software_2",
                                                                                name: "Software_Development",
                                                                                data: {
                                                                                    relation: "<h4>Software Development</h4><b>Description:</b><br/>Typical software development involves several key stages: first, requirements gathering, where the needs and objectives of the software are defined; next, design, where the overall structure and architecture of the software are planned out; and finally, implementation, where developers write the code according to the design, followed by testing to ensure functionality and identify and fix any bugs. This iterative process may also include additional steps such as deployment, maintenance, and updates to continually improve the software over time."
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        id: "hands_1E",
                                                                                        name: "H.A.N.D.S.",
                                                                                        data: {
                                                                                            relation: "<h4>H.A.N.D.S.</h4><b>Description:</b><br/>The H.A.N.D.S. methodology is a framework used in IT management to ensure comprehensive coverage of technology infrastructure. It comprises four key components: Hardware, which involves the physical equipment and devices necessary for operations; Applications, referring to the software programs and systems used to carry out specific tasks; Network, which encompasses the communication infrastructure connecting devices and facilitating data transfer; and Security, which involves measures to safeguard data, systems, and networks from unauthorized access and malicious attacks. By addressing each of these areas, organizations can effectively manage and maintain their technology infrastructure to support their business objectives securely and efficiently."
                                                                                        },
                                                                                        children: []
                                                                                    },
                                                                                ]
                                                                            },
                                                                        ]
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                id: "Problems_A1B",
                                                                name: "Complex",
                                                                data: {
                                                                    relation: "<h4>Complex</h4><b>Description:</b><br/>Complex problems often exhibit emergent properties, where the interactions of individual components give rise to behaviors or phenomena not directly predictable from those components alone. These emergent properties can manifest in various systems, from biological ecosystems to social networks and economies. Understanding and addressing complex problems often require analyzing these emergent phenomena and their underlying dynamics to develop effective solutions."
                                                                },
                                                                children: [
                                                                    {
                                                                        id: "ep_1C",
                                                                        name: "Emergent_Properties",
                                                                        data: {
                                                                            relation: "<h4>Emergent Properties</h4><b>Description:</b><br/>Emergent properties are characteristics or behaviors that emerge in complex systems as a result of interactions between their components. These properties are not directly predictable from the properties of individual components alone. Instead, they arise from the collective behavior of the system, often exhibiting novel or unexpected features that cannot be attributed to any single component in isolation."
                                                                        },
                                                                        children: [
                                                                            {
                                                                                id: "ai_2C",
                                                                                name: "Artificial_Intelligence",
                                                                                data: {
                                                                                    relation: "<h4>Artificial Intelligence</h4><b>Description:</b><br/>Artificial Intelligence (AI) in software development refers to the use of advanced algorithms and machine learning techniques to automate tasks, improve efficiency, and enhance decision-making processes within the development lifecycle. By analyzing large datasets and identifying patterns, AI can assist developers in debugging code, optimizing performance, and predicting potential issues before they arise. Ultimately, AI empowers developers to create more robust, scalable, and intelligent software solutions."
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        id: "hands_1D",
                                                                                        name: "H.A.N.D.S.",
                                                                                        data: {
                                                                                            relation: "<h4>H.A.N.D.S.</h4><b>Description:</b><br/>The H.A.N.D.S. methodology is a framework used in IT management to ensure comprehensive coverage of technology infrastructure. It comprises four key components: Hardware, which involves the physical equipment and devices necessary for operations; Applications, referring to the software programs and systems used to carry out specific tasks; Network, which encompasses the communication infrastructure connecting devices and facilitating data transfer; and Security, which involves measures to safeguard data, systems, and networks from unauthorized access and malicious attacks. By addressing each of these areas, organizations can effectively manage and maintain their technology infrastructure to support their business objectives securely and efficiently."
                                                                                        },
                                                                                        children: []
                                                                                    },
                                                                                ]
                                                                            },
                                                                        ]
                                                                    },
                                                                ]
                                                            },
                                                        ]
                                                    },

                                                ]
                                            },

                                        ]
                                    },

                                ]
                            },


                        ]
                    },

                ]
            },

            {
                id: "RESP_1",
                name: ".04 Responsibilities",
                data: {
                    relation: "<h4>New Responsibilities with A.I.</h4><b>Description:</b>AI solutions companies are tasked with developing, implementing, and maintaining artificial intelligence technologies for various industries. Their responsibilities encompass designing machine learning algorithms tailored to specific business needs, deploying AI systems to optimize operations and decision-making processes, and ensuring data privacy and security compliance. Additionally, these companies often provide ongoing support, training, and updates to ensure the effectiveness and efficiency of their AI solutions."
                },
                children: [
                    {
                        id: "CV1_R1",
                        name: "Internal",
                        data: {
                            relation: "<h4>Internal Controls</h4><b>Description:</b><br/>Internal controls for a software company encompass policies and procedures designed to safeguard assets, ensure accurate financial reporting, and promote operational efficiency. These controls may involve segregation of duties, access controls, and regular audits of software systems to detect and prevent fraud or errors. Additionally, they often include measures to protect sensitive customer data and intellectual property. Effective internal controls help mitigate risks and enhance trust among stakeholders, ultimately supporting the company's long-term success and compliance with regulations."
                        },
                        children: [

                            {
                                id: "Respon_R0",
                                name: "Small Teams",
                                data: {
                                    relation: '<h4>Miscommunication:</b></h4><br/>The speed and adaptability of small teams is possible based on lines of communication being reduced.<br/> <br/><a href="small_teams.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },
                            {
                                id: "Respon_R1",
                                name: "Code Base",
                                data: {
                                    relation: '<h4>Poor Coding and A.I. Generated Technical Debt</h4><b>Description:</b><br/>The use of A.I. code generators is not so secure.<br/> <br/><a href="a5ccb9b4-2ad9-4e99-b7c8-822c7dbafd79.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1Z",
                                name: "Unintended Uses",
                                data: {
                                    relation: '<h4>Understand potential and Unintended Use Cases</h4><b>Description:</b><br/>Understand potential unintended use cases and plan around as much as possible.<br/> <br/><a href="internal -2.png" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1X",
                                name: "Decomissioning",
                                data: {
                                    relation: '<h4>What is your Decomm strategy</h4><b>Description:</b><br/>Specifically in the medical space, what happens when the service no longer has operational capital or initiatives change?<br/> This provides a lesson on the importance of keeping tabs on your competitors, you may be able to sell/port users over from your service. <br/><a href="decomm.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1G",
                                name: "Platform Weaponization",
                                data: {
                                    relation: '<h4>Can this be weaponized?</h4><b>Description:</b><br/>Who would benefit if your solution was weaponized?<br/> <br/><a href="Platform Weaponization - Wikipedia.PDF.pdf" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1H",
                                name: "Well Thought",

                                data: {
                                    relation: '<h4>DO NOT MAKE IT WORSE</h4><b>Description:</b><br/>Of critical importance is to constantly review feedback of the solution ensuring that it is not making things worse<br/> <br/><a href="worse.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [

                                ]
                            },
                            {
                                id: "Respon_R1I",
                                name: "Creating Disorders",

                                data: {
                                    relation: '<h4>Autophagy</h4><b>Description:</b><br/>Be careful when using synthetic data for model training.<br/> <br/><a href="disorder.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [

                                ]
                            },

                        ]
                    },
                    {
                        id: "CV1_H1",
                        name: "Vendors",
                        data: {
                            relation: "<h4>Vendor Management</h4><b>Description:</b><br/>Software vendor management involves the oversight and coordination of relationships between an organization and its software vendors. This includes tasks such as negotiating contracts, monitoring performance, and ensuring compliance with licensing agreements. Effective vendor management aims to optimize the value derived from software investments while mitigating risks and maintaining good communication channels for support and updates. Ultimately, it enables organizations to efficiently procure, deploy, and maintain the software solutions critical to their operations."
                        },
                        children: [
                            {
                                id: "Respon_R1A",
                                name: "Litigation",
                                data: {
                                    relation: '<h4>3rd Party Litigation</h4><b>Description:</b><br/>Be dilligent in understanding your exposure from vendor actions<br/> <br/><a href="2024-03-13 at 10.30.32 AM.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1B",
                                name: "Critical Dependencies",
                                data: {
                                    relation: '<h4>Outsourced critical Dependencies</h4><b>Description:</b><br/>Be aware of what critical systems have been outsourced<br/> <br/><a href="2024-03-13 at 10.30.31 AM.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respone_R1D",

                                name: "Contribution impacts?",
                                data: {
                                    relation: '<h4>What is happening to your beneficiaries?</h4><b>Description:</b><br/>Pay attention to what is happening with your partner and beneficiary organizations.<br/> <br/><a href="partner.jpeg" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1C",
                                name: "Who owns what?",
                                data: {
                                    relation: '<h4>Who owns how much?</h4><b>Description:</b><br/>Understand how much of your solution providers own or are entitled to.<br/> <br/><a href="Screenshot from 2024-03-13 10-48-59.png" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                        ]
                    },
                    {
                        id: "CV1_M1",
                        name: "External Actors",
                        data: {
                            relation: '<h4>External Actors</h4><b>Description:</b><br/>External actors of a software company refer to individuals, organizations, or entities outside of the company that interact with its products, services, or operations. These can include customers, partners, suppliers, regulatory bodies, and competitors. External actors play a crucial role in shaping the companys market dynamics, revenue streams, and overall success. Managing relationships and interactions with these external actors effectively is essential for the software company to thrive in a competitive environment.<br/>Various Jail break methods: <br/><a href="prompt_1.png" target="_blank">Graphic</a><br/><a href="prompt_2.png" target="_blank">Graphic</a><br/><a href="prompt_3.jpeg" target="_blank">Graphic</a><br/><a href="prompt_4.png" target="_blank">Graphic</a><br/><a href="prompt_5.png" target="_blank">Graphic</a><br/><a href="prompt_6.png" target="_blank">Graphic</a>'
                        },
                        children: [
                        ]
                    },
                    {
                        id: "CV1_C1",
                        name: "Geo-Politics",
                        data: {
                            relation: "<h4>Geo-Political Factors</h4><b>Description:</b><br/>Geopolitical factors refer to the interplay between geography, politics, and international relations that shape the behavior and interactions of nations on the global stage. These factors encompass elements such as territorial boundaries, natural resources, military capabilities, and cultural dynamics. They influence decisions made by governments regarding alliances, conflicts, trade agreements, and foreign policies. Understanding geopolitical factors is crucial for analyzing and predicting the actions of countries and their impact on regional and global stability."
                        },
                        children: [
                            {
                                id: "Respon_R1D",
                                name: "Collateral Damage",
                                data: {
                                    relation: '<h4>Are your resources a target?</h4><b>Description:</b><br/>What is the scope of your resources and dependent systems?<br/> <br/><a href="Screenshot from 2024-03-13 10-49-23.png" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                            {
                                id: "Respon_R1E",
                                name: "Regulatory Concerns",
                                data: {
                                    relation: '<h4>Regulatory Concerns</h4><b>Description:</b><br/>Understand any regulatory impacts.<br/> <br/><a href="Screenshot from 2024-03-12 14-06-40.png" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },
                            {
                                id: "Respon_R1F",
                                name: "Unforseeable Impacts",
                                data: {

                                    relation: '<h4>Things you cant factor</h4><b>Description:</b><br/>Be aware of the most unthinkable<br/> <br/><a href="Screenshot from 2024-03-13 11-38-14.png" target="_blank">Graphic</a>'
                                },
                                children: [
                                ]
                            },

                        ]
                    },

                ]
            },

        ],
        data: {
            relation: "<h4>Michael Stattelman speaking on A.I. Innovation</h4><br/><center><button class='btn btn-primary btn-modal'data-toggle='modal'data-target='#fsModal'>Introduction Video</button></center><br/><br/><b>Breakdown is as follows:</b><ul><li>Talking Points</li><li>Tell me something Interesting.</li><li>Quick LLM</li><li>Innovation Process</li><li>Responsibilities</li><li>Problem Set</li></ul><br/><font color=#FF0000>***Click the Nodes in the graph to navigate***</font><br/><font color=#FF0000>***Scroll your mouse for zoom***</font>"
        }
    };
    //end

    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
            CanvasStyles: {
                strokeStyle: '#555'
            }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
            enable: true,
            panning: true,
            zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ddeeff'
        },

        Edge: {
            color: '#0072bc',
            lineWidth: 1.5
        },

        onBeforeCompute: function (node) {
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },

        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function (domElement, node) {
            domElement.innerHTML = node.name;
            domElement.onclick = function () {
                rgraph.onClick(node.id, {
                    onComplete: function () {
                        Log.write("Render complete");
                    }
                });
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function (domElement, node) {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 1) {
                style.fontSize = "0.8em";
                style.color = "#ccc";

            } else if (node._depth == 2) {
                style.fontSize = "0.6em";
                style.color = "#494949";

            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function (n) {
        var pos = n.getPos();
        pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
        modes: ['polar'],
        duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
