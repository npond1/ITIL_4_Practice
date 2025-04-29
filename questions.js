const questions =
[
  {
    "question": "What is defined as the perceived benefits, usefulness, and importance of something?",
    "choices": [
      { "text": "Outcome", "isCorrect": false },
      { "text": "Value", "isCorrect": true },
      { "text": "Utility", "isCorrect": false },
      { "text": "Warranty", "isCorrect": false }
    ],
    "explanation": "ITIL 4 defines 'value' as the perceived benefits, usefulness, and importance of something. It is the core purpose of an organization and its services."
  },
  {
    "question": "Which concept describes the functionality offered by a product or service to meet a particular need?",
    "choices": [
      { "text": "Warranty", "isCorrect": false },
      { "text": "Value", "isCorrect": false },
      { "text": "Utility", "isCorrect": true },
      { "text": "Outcome", "isCorrect": false }
    ],
    "explanation": "'Utility' refers to the functionality offered by a product or service, or 'what the service does'. It helps determine if a service is 'fit for purpose'."
  },
  {
    "question": "Which concept assures that a product or service will meet agreed requirements?",
    "choices": [
      { "text": "Utility", "isCorrect": false },
      { "text": "Warranty", "isCorrect": true },
      { "text": "Outcome", "isCorrect": false },
      { "text": "Risk", "isCorrect": false }
    ],
    "explanation": "'Warranty' refers to the assurance that a product or service will meet agreed requirements, often relating to availability, capacity, continuity, and security. It helps determine if a service is 'fit for use'."
  },
  {
    "question": "Who is the person that defines the requirements for a service and takes responsibility for the outcomes of service consumption?",
    "choices": [
      { "text": "User", "isCorrect": false },
      { "text": "Sponsor", "isCorrect": false },
      { "text": "Customer", "isCorrect": true },
      { "text": "Supplier", "isCorrect": false }
    ],
    "explanation": "The 'customer' is the role that defines requirements for a service and takes responsibility for the outcomes resulting from service consumption."
  },
  {
    "question": "Who is the person that uses services?",
    "choices": [
      { "text": "Customer", "isCorrect": false },
      { "text": "Sponsor", "isCorrect": false },
      { "text": "Service Provider", "isCorrect": false },
      { "text": "User", "isCorrect": true }
    ],
    "explanation": "A 'user' is the role that uses the services provided."
  },
  {
    "question": "Who is the person that authorizes budget for service consumption?",
    "choices": [
      { "text": "User", "isCorrect": false },
      { "text": "Sponsor", "isCorrect": true },
      { "text": "Customer", "isCorrect": false },
      { "text": "Change Authority", "isCorrect": false }
    ],
    "explanation": "The 'sponsor' is the role that authorizes the budget for service consumption. This role can be combined with the customer role."
  },
  {
    "question": "What term describes a result for a stakeholder enabled by one or more outputs?",
    "choices": [
      { "text": "Output", "isCorrect": false },
      { "text": "Service", "isCorrect": false },
      { "text": "Outcome", "isCorrect": true },
      { "text": "Practice", "isCorrect": false }
    ],
    "explanation": "An 'outcome' is a result for a stakeholder enabled by one or more outputs. Service providers help consumers achieve outcomes."
  },
  {
    "question": "What is a tangible or intangible deliverable of an activity?",
    "choices": [
      { "text": "Outcome", "isCorrect": false },
      { "text": "Output", "isCorrect": true },
      { "text": "Service Level", "isCorrect": false },
      { "text": "Risk", "isCorrect": false }
    ],
    "explanation": "An 'output' is a tangible or intangible deliverable resulting from an activity. Outputs contribute to achieving outcomes."
  },
  {
    "question": "What are the four dimensions of service management?",
    "choices": [
      { "text": "Plan, Improve, Engage, Design & Transition", "isCorrect": false },
      { "text": "People, Process, Products, Partners", "isCorrect": false },
      { "text": "Organizations and People, Information and Technology, Partners and Suppliers, Value Streams and Processes", "isCorrect": true },
      { "text": "Demand, Value, Cost, Risk", "isCorrect": false }
    ],
    "explanation": "The four dimensions of service management are: Organizations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes. They are relevant to all aspects of the Service Value System (SVS)."
  },
  {
    "question": "Which dimension of service management includes culture, roles, responsibilities, and communication?",
    "choices": [
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "Value Streams and Processes", "isCorrect": false },
      { "text": "Organizations and People", "isCorrect": true }
    ],
    "explanation": "The 'Organizations and People' dimension covers aspects like roles, responsibilities, organizational structure, culture, staffing, competencies, and communication."
  },
  {
    "question": "Which dimension considers the information managed by services and the supporting technologies?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": true },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "Value Streams and Processes", "isCorrect": false }
    ],
    "explanation": "The 'Information and Technology' dimension includes the information created, managed, and used during service provision and consumption, as well as the technologies that support and enable the service."
  },
  {
    "question": "Which dimension encompasses an organization's relationships with other organizations involved in service design, development, deployment, delivery, support, and continual improvement?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": true },
      { "text": "Value Streams and Processes", "isCorrect": false }
    ],
    "explanation": "The 'Partners and Suppliers' dimension focuses on the relationships an organization has with other entities that contribute to its services, including contracts and agreements."
  },
  {
    "question": "Which dimension is concerned with how the various parts of the organization work in an integrated and coordinated way to enable value creation through products and services?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "Value Streams and Processes", "isCorrect": true }
    ],
    "explanation": "The 'Value Streams and Processes' dimension focuses on the activities, workflows, controls, and procedures needed to achieve agreed objectives, defining how work gets done."
  },
  {
    "question": "What is the core component of the ITIL Service Value System (SVS)?",
    "choices": [
      { "text": "Guiding Principles", "isCorrect": false },
      { "text": "Service Value Chain", "isCorrect": true },
      { "text": "Practices", "isCorrect": false },
      { "text": "Governance", "isCorrect": false }
    ],
    "explanation": "The Service Value Chain (SVC) is the central element of the ITIL Service Value System (SVS). It's an operating model outlining key activities required to respond to demand and facilitate value realization."
  },
  {
    "question": "What are the components of the ITIL Service Value System (SVS)?",
    "choices": [
      { "text": "Inputs, Activities, Outputs, Outcomes", "isCorrect": false },
      { "text": "Utility, Warranty, Cost, Risk", "isCorrect": false },
      { "text": "Guiding Principles, Governance, Service Value Chain, Practices, Continual Improvement", "isCorrect": true },
      { "text": "Incident, Problem, Change, Service Request", "isCorrect": false }
    ],
    "explanation": "The ITIL Service Value System (SVS) describes how organizational components and activities work together to facilitate value co-creation. Its components are: Guiding Principles, Governance, Service Value Chain, Practices, and Continual Improvement."
  },
  {
    "question": "Which ITIL concept provides recommendations that guide an organization in all circumstances?",
    "choices": [
      { "text": "Practices", "isCorrect": false },
      { "text": "Governance", "isCorrect": false },
      { "text": "Service Value Chain Activities", "isCorrect": false },
      { "text": "Guiding Principles", "isCorrect": true }
    ],
    "explanation": "The ITIL Guiding Principles are recommendations that guide an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure."
  },
  {
    "question": "Which guiding principle emphasizes understanding the service consumer's perspective of value?",
    "choices": [
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Focus on value", "isCorrect": true },
      { "text": "Collaborate and promote visibility", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": false }
    ],
    "explanation": "The 'Focus on value' principle stresses that all activities should link back, directly or indirectly, to value for stakeholders, primarily the service consumer."
  },
  {
    "question": "Which guiding principle advises assessing the current state and deciding what can be reused before building something new?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": false },
      { "text": "Start where you are", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false }
    ],
    "explanation": "The 'Start where you are' principle advises against starting from scratch without considering what is already available. It involves observing the existing state directly and leveraging existing resources."
  },
  {
    "question": "Which guiding principle recommends organizing work into smaller, manageable sections that can be executed and completed in a timely manner?",
    "choices": [
      { "text": "Collaborate and promote visibility", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": true },
      { "text": "Optimize and automate", "isCorrect": false }
    ],
    "explanation": "The 'Progress iteratively with feedback' principle advocates breaking down work into smaller iterations, producing minimum viable products, and using feedback loops to ensure focus and adapt to changing requirements."
  },
  {
    "question": "Which guiding principle highlights the importance of working together across boundaries and making information accessible?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Collaborate and promote visibility", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false },
      { "text": "Optimize and automate", "isCorrect": false }
    ],
    "explanation": "'Collaborate and promote visibility' emphasizes that achieving objectives requires information sharing, understanding, and trust, achieved through collaboration and making work and consequences visible."
  },
  {
    "question": "Which guiding principle advocates considering the interactions between all components of the Service Value System?",
    "choices": [
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false }
    ],
    "explanation": "'Think and work holistically' advises against focusing on a single part in isolation. Services are delivered through the coordination of all activities and components, requiring end-to-end visibility."
  },
  {
    "question": "Which guiding principle suggests using the minimum number of steps necessary to accomplish an objective?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Optimize and automate", "isCorrect": false },
      { "text": "Keep it simple and practical", "isCorrect": true },
      { "text": "Start where you are", "isCorrect": false }
    ],
    "explanation": "'Keep it simple and practical' encourages eliminating processes, services, actions, or metrics that fail to produce value or useful outcomes. Use outcome-based thinking to produce practical solutions."
  },
  {
    "question": "Which guiding principle recommends maximizing the value of work carried out by human and technical resources?",
    "choices": [
      { "text": "Collaborate and promote visibility", "isCorrect": false },
      { "text": "Optimize and automate", "isCorrect": true },
      { "text": "Think and work holistically", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": false }
    ],
    "explanation": "'Optimize and automate' focuses on making work as effective and efficient as possible. Automation is a key aspect, used where feasible after optimization."
  },
  {
    "question": "What are the six activities of the Service Value Chain (SVC)?",
    "choices": [
      { "text": "Identify, Log, Categorize, Prioritize, Resolve, Close", "isCorrect": false },
      { "text": "Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support", "isCorrect": true },
      { "text": "Define Strategy, Design Services, Transition Services, Operate Services, Continually Improve Services", "isCorrect": false },
      { "text": "Requirements, Design, Implementation, Testing, Deployment, Maintenance", "isCorrect": false }
    ],
    "explanation": "The six activities within the ITIL Service Value Chain are: Plan, Improve, Engage, Design & Transition, Obtain/Build, and Deliver & Support."
  },
  {
    "question": "Which Service Value Chain activity ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services?",
    "choices": [
      { "text": "Improve", "isCorrect": false },
      { "text": "Engage", "isCorrect": false },
      { "text": "Plan", "isCorrect": true },
      { "text": "Design & Transition", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Plan' value chain activity is to ensure a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization."
  },
  {
    "question": "Which Service Value Chain activity ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions?",
    "choices": [
      { "text": "Plan", "isCorrect": false },
      { "text": "Improve", "isCorrect": true },
      { "text": "Obtain/Build", "isCorrect": false },
      { "text": "Deliver & Support", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Improve' value chain activity is to ensure the continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management."
  },
  {
    "question": "Which Service Value Chain activity provides a good understanding of stakeholder needs, transparency, continual engagement, and good relationships with all stakeholders?",
    "choices": [
      { "text": "Plan", "isCorrect": false },
      { "text": "Engage", "isCorrect": true },
      { "text": "Design & Transition", "isCorrect": false },
      { "text": "Deliver & Support", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Engage' value chain activity is to provide a good understanding of stakeholder needs, ensure transparency, maintain continual engagement, and foster good relationships with all stakeholders."
  },
  {
    "question": "Which Service Value Chain activity ensures that products and services continually meet stakeholder expectations for quality, costs, and time to market?",
    "choices": [
      { "text": "Improve", "isCorrect": false },
      { "text": "Obtain/Build", "isCorrect": false },
      { "text": "Deliver & Support", "isCorrect": false },
      { "text": "Design & Transition", "isCorrect": true }
    ],
    "explanation": "The purpose of the 'Design & Transition' value chain activity is to ensure that products and services continually meet stakeholder expectations for quality, costs, and time to market."
  },
  {
    "question": "Which Service Value Chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?",
    "choices": [
      { "text": "Engage", "isCorrect": false },
      { "text": "Design & Transition", "isCorrect": false },
      { "text": "Obtain/Build", "isCorrect": true },
      { "text": "Deliver & Support", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Obtain/Build' value chain activity is to ensure service components are available when and where needed, and that they meet agreed specifications."
  },
  {
    "question": "Which Service Value Chain activity ensures that services are delivered and supported according to agreed specifications and stakeholders' expectations?",
    "choices": [
      { "text": "Plan", "isCorrect": false },
      { "text": "Improve", "isCorrect": false },
      { "text": "Deliver & Support", "isCorrect": true },
      { "text": "Engage", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Deliver & Support' value chain activity is to ensure services are delivered and supported according to agreed specifications and stakeholders' expectations."
  },
  {
    "question": "What is defined as a set of organizational resources designed for performing work or accomplishing an objective?",
    "choices": [
      { "text": "Service", "isCorrect": false },
      { "text": "Process", "isCorrect": false },
      { "text": "Practice", "isCorrect": true },
      { "text": "Value Stream", "isCorrect": false }
    ],
    "explanation": "An ITIL 'practice' is a set of organizational resources designed for performing work or accomplishing an objective. ITIL 4 groups these into General Management, Service Management, and Technical Management practices."
  },
  {
    "question": "Which ITIL practice has the purpose of aligning the organization's practices and services with changing business needs through the ongoing identification and improvement of services, service components, practices, or any element involved in the efficient and effective management of products and services?",
    "choices": [
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Continual Improvement", "isCorrect": true },
      { "text": "Service Level Management", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Continual Improvement' practice is to align the organization's practices and services with changing business needs through ongoing identification and improvement activities."
  },
  {
    "question": "What model is often used within the Continual Improvement practice?",
    "choices": [
      { "text": "The Service Value Chain", "isCorrect": false },
      { "text": "The Four Dimensions Model", "isCorrect": false },
      { "text": "The Continual Improvement Model", "isCorrect": true },
      { "text": "The RACI Model", "isCorrect": false }
    ],
    "explanation": "The 'Continual Improvement Model' provides a structured approach to implementing improvements. Its steps include: What is the vision?, Where are we now?, Where do we want to be?, How do we get there?, Take action, Did we get there?, How do we keep the momentum going?"
  },
  {
    "question": "Which ITIL practice has the purpose of protecting the information needed by the organization to conduct its business?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Risk Management", "isCorrect": false },
      { "text": "Information Security Management", "isCorrect": true },
      { "text": "Supplier Management", "isCorrect": false }
    ],
    "explanation": "The purpose of the 'Information Security Management' practice is to protect the organization's information assets regarding confidentiality, integrity, availability, and authentication/non-repudiation."
  },
  {
    "question": "Which ITIL practice has the purpose of establishing and nurturing the links between the organization and its stakeholders at strategic and tactical levels?",
    "choices": [
      { "text": "Supplier Management", "isCorrect": false },
      { "text": "Service Desk", "isCorrect": false },
      { "text": "Business Relationship Management (often covered under Relationship Management)", "isCorrect": true },
      { "text": "Service Level Management", "isCorrect": false }
    ],
    "explanation": "The 'Relationship Management' practice (which encompasses Business Relationship Management) aims to establish and nurture links between the organization and its stakeholders, ensuring stakeholder satisfaction and understanding needs."
  },
  {
    "question": "Which ITIL practice ensures that the organization's suppliers and their performances are managed appropriately to support the seamless provision of quality products and services?",
    "choices": [
      { "text": "Relationship Management", "isCorrect": false },
      { "text": "Service Level Management", "isCorrect": false },
      { "text": "Supplier Management", "isCorrect": true },
      { "text": "IT Asset Management", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Supplier Management' is to ensure that suppliers and their performance are managed effectively to support the seamless provision of quality products and services, including managing supplier contracts and relationships."
  },
  {
    "question": "Which ITIL practice has the purpose of maximizing the number of successful IT changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Release Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": true },
      { "text": "Deployment Management", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Change Enablement' (formerly Change Management) is to maximize successful service and product changes through proper risk assessment, authorization, and schedule management."
  },
  {
    "question": "What is defined as the addition, modification, or removal of anything that could have a direct or indirect effect on services?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Problem", "isCorrect": false },
      { "text": "A Change", "isCorrect": true },
      { "text": "An Event", "isCorrect": false }
    ],
    "explanation": "A 'change' is the addition, modification, or removal of anything that could have a direct or indirect effect on services."
  },
  {
    "question": "Which type of change needs to be implemented as soon as possible, for example, to resolve an incident or implement a security patch?",
    "choices": [
      { "text": "Standard Change", "isCorrect": false },
      { "text": "Normal Change", "isCorrect": false },
      { "text": "Emergency Change", "isCorrect": true },
      { "text": "Project Change", "isCorrect": false }
    ],
    "explanation": "'Emergency changes' are changes that must be implemented as soon as possible, typically to resolve an incident or implement urgent security measures. The assessment and authorization process is expedited."
  },
  {
    "question": "Which type of change is low-risk, pre-authorized, and well-understood?",
    "choices": [
      { "text": "Emergency Change", "isCorrect": false },
      { "text": "Normal Change", "isCorrect": false },
      { "text": "Standard Change", "isCorrect": true },
      { "text": "Urgent Change", "isCorrect": false }
    ],
    "explanation": "'Standard changes' are pre-authorized changes that are low risk, relatively common, and follow a documented and approved procedure, such as password resets or standard equipment provisioning."
  },
  {
    "question": "Which type of change needs to be scheduled, assessed, and authorized following a standard process?",
    "choices": [
      { "text": "Standard Change", "isCorrect": false },
      { "text": "Normal Change", "isCorrect": true },
      { "text": "Emergency Change", "isCorrect": false },
      { "text": "Routine Change", "isCorrect": false }
    ],
    "explanation": "'Normal changes' are subject to the full change enablement process, requiring scheduling, assessment (risk, impact, benefit), and authorization based on the type of change."
  },
  {
    "question": "What is the role that authorizes a change?",
    "choices": [
      { "text": "Change Implementer", "isCorrect": false },
      { "text": "Change Manager", "isCorrect": false },
      { "text": "Change Authority", "isCorrect": true },
      { "text": "Service Owner", "isCorrect": false }
    ],
    "explanation": "The 'Change Authority' is the person or group responsible for authorizing a change. This authority varies depending on the type and risk of the change."
  },
  {
    "question": "Which ITIL practice has the purpose of minimizing the negative impact of incidents by restoring normal service operation as quickly as possible?",
    "choices": [
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Incident Management", "isCorrect": true },
      { "text": "Service Desk", "isCorrect": false }
    ],
    "explanation": "The primary purpose of 'Incident Management' is to restore normal service operation as quickly as possible and minimize the adverse impact on business operations."
  },
  {
    "question": "What is defined as an unplanned interruption to a service or reduction in the quality of a service?",
    "choices": [
      { "text": "A Problem", "isCorrect": false },
      { "text": "An Event", "isCorrect": false },
      { "text": "A Change", "isCorrect": false },
      { "text": "An Incident", "isCorrect": true }
    ],
    "explanation": "An 'incident' is defined as an unplanned interruption to a service or a reduction in the quality of a service. Failure of a configuration item that has not yet affected service is also an incident."
  },
  {
    "question": "Which ITIL practice involves managing the lifecycle of all IT assets?",
    "choices": [
      { "text": "Service Configuration Management", "isCorrect": false },
      { "text": "IT Asset Management", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Financial Management for IT Services", "isCorrect": false }
    ],
    "explanation": "'IT Asset Management' (ITAM) is focused on planning and managing the full lifecycle of all IT assets, helping the organization maximize value, control costs, manage risks, support decision-making, and meet requirements."
  },
  {
    "question": "What is defined as any valuable component that can contribute to the delivery of an IT product or service?",
    "choices": [
      { "text": "Configuration Item (CI)", "isCorrect": false },
      { "text": "Service Component", "isCorrect": false },
      { "text": "IT Asset", "isCorrect": true },
      { "text": "Resource", "isCorrect": false }
    ],
    "explanation": "An 'IT asset' is any financially valuable component that can contribute to the delivery of an IT product or service. This includes hardware, software, licenses, etc."
  },
  {
    "question": "Which ITIL practice systematically observes services and service components, and records and reports selected changes of state identified as events?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Monitoring and Event Management", "isCorrect": true },
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Capacity Management", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Monitoring and Event Management' is to systematically observe services and components, and record and report selected changes of state identified as 'events'."
  },
  {
    "question": "What is defined as any change of state that has significance for the management of a configuration item (CI) or IT service?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Problem", "isCorrect": false },
      { "text": "An Event", "isCorrect": true },
      { "text": "A Trigger", "isCorrect": false }
    ],
    "explanation": "An 'event' is any change of state that has significance for the management of a service or other configuration item. Events are typically recognized through notifications created by an IT service, CI, or monitoring tool."
  },
  {
    "question": "Which ITIL practice has the purpose of reducing the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Problem Management", "isCorrect": true },
      { "text": "Risk Management", "isCorrect": false },
      { "text": "Continual Improvement", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Problem Management' is to reduce the likelihood and impact of incidents by identifying their actual and potential causes, and managing workarounds and known errors."
  },
  {
    "question": "What is defined as a cause, or potential cause, of one or more incidents?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Known Error", "isCorrect": false },
      { "text": "A Problem", "isCorrect": true },
      { "text": "A Risk", "isCorrect": false }
    ],
    "explanation": "A 'problem' is defined as a cause, or potential cause, of one or more incidents."
  },
  {
    "question": "What is a problem that has been analyzed but has not been resolved?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Workaround", "isCorrect": false },
      { "text": "A Known Error", "isCorrect": true },
      { "text": "An Open Problem", "isCorrect": false }
    ],
    "explanation": "A 'known error' is a problem that has a documented root cause and a workaround. It remains a known error until it is permanently resolved."
  },
  {
    "question": "What is a solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available?",
    "choices": [
      { "text": "A Fix", "isCorrect": false },
      { "text": "A Patch", "isCorrect": false },
      { "text": "A Workaround", "isCorrect": true },
      { "text": "A Known Error", "isCorrect": false }
    ],
    "explanation": "A 'workaround' is a temporary solution aimed at reducing or eliminating the impact of an incident or problem when a permanent resolution is not yet feasible. Workarounds for problems are documented in known error records."
  },
  {
    "question": "What are the three phases of Problem Management?",
    "choices": [
      { "text": "Logging, Categorization, Prioritization", "isCorrect": false },
      { "text": "Detection, Diagnosis, Resolution", "isCorrect": false },
      { "text": "Problem Identification, Problem Control, Error Control", "isCorrect": true },
      { "text": "Investigation, Diagnosis, Implementation", "isCorrect": false }
    ],
    "explanation": "Problem Management activities are generally divided into three phases: Problem Identification (identifying and logging problems), Problem Control (analyzing problems and documenting workarounds/known errors), and Error Control (managing known errors and evaluating permanent fixes)."
  },
  {
    "question": "Which ITIL practice has the purpose of making new and changed services and features available for use?",
    "choices": [
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Deployment Management", "isCorrect": false },
      { "text": "Release Management", "isCorrect": true },
      { "text": "Service Configuration Management", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Release Management' is to make new and changed services and features available for use, coordinating releases according to the organization's policies and plans."
  },
  {
    "question": "Which ITIL practice has the purpose of ensuring that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed?",
    "choices": [
      { "text": "IT Asset Management", "isCorrect": false },
      { "text": "Service Configuration Management", "isCorrect": true },
      { "text": "Monitoring and Event Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false }
    ],
    "explanation": "'Service Configuration Management' provides information on Configuration Items (CIs), how they are configured, and the relationships between them, supporting many other practices."
  },
  {
    "question": "What is defined as any component that needs to be managed in order to deliver an IT service?",
    "choices": [
      { "text": "IT Asset", "isCorrect": false },
      { "text": "Service Component", "isCorrect": false },
      { "text": "Configuration Item (CI)", "isCorrect": true },
      { "text": "Resource", "isCorrect": false }
    ],
    "explanation": "A 'Configuration Item (CI)' is any component that needs to be managed to deliver an IT service. Information about each CI is recorded in a configuration record within the Configuration Management System (CMS)."
  },
  {
    "question": "What is a database or set of databases used to store configuration records throughout their lifecycle?",
    "choices": [
      { "text": "Configuration Management Database (CMDB)", "isCorrect": true },
      { "text": "Known Error Database (KEDB)", "isCorrect": false },
      { "text": "Asset Register", "isCorrect": false },
      { "text": "Service Catalogue", "isCorrect": false }
    ],
    "explanation": "A 'Configuration Management Database (CMDB)' is a database used to store configuration records and their relationships. A CMDB may be part of a larger Configuration Management System (CMS)."
  },
  {
    "question": "Which ITIL practice provides a single point of contact for users?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Request Fulfillment (covered under Service Request Management)", "isCorrect": false },
      { "text": "Service Desk", "isCorrect": true },
      { "text": "Relationship Management", "isCorrect": false }
    ],
    "explanation": "The 'Service Desk' practice provides the entry point and single point of contact for the service provider with all its users, handling incidents, service requests, queries, and communications."
  },
  {
    "question": "What are the primary activities of the Service Desk practice?",
    "choices": [
      { "text": "Designing and transitioning new services", "isCorrect": false },
      { "text": "Logging incidents and service requests, providing support, and escalating", "isCorrect": true },
      { "text": "Managing supplier contracts and performance", "isCorrect": false },
      { "text": "Analyzing problems and finding root causes", "isCorrect": false }
    ],
    "explanation": "The Service Desk is primarily responsible for capturing demand for incident resolution and service requests. Key activities include logging and managing incidents and requests, providing L1 support, communication, and escalating when necessary."
  },
  {
    "question": "Which ITIL practice has the purpose of setting clear business-based targets for service performance, so that the delivery of a service can be properly assessed, monitored, and managed against these targets?",
    "choices": [
      { "text": "Availability Management", "isCorrect": false },
      { "text": "Capacity Management", "isCorrect": false },
      { "text": "Service Level Management", "isCorrect": true },
      { "text": "Continual Improvement", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Service Level Management' (SLM) is to set clear business-based targets for service performance (captured in Service Level Agreements - SLAs) and ensure delivery meets these agreed levels."
  },
  {
    "question": "What is a documented agreement between a service provider and a customer that identifies both services required and the expected level of service?",
    "choices": [
      { "text": "Operational Level Agreement (OLA)", "isCorrect": false },
      { "text": "Underpinning Contract (UC)", "isCorrect": false },
      { "text": "Service Level Agreement (SLA)", "isCorrect": true },
      { "text": "Service Catalogue", "isCorrect": false }
    ],
    "explanation": "A 'Service Level Agreement (SLA)' is a documented agreement between a service provider and a customer defining the services, service level targets, and responsibilities of both parties."
  },
  {
    "question": "How can 'watermelon SLA' effect be described?",
    "choices": [
      { "text": "When all individual metrics are met, but the overall service experience is poor.", "isCorrect": true },
      { "text": "When service levels improve dramatically after a major incident.", "isCorrect": false },
      { "text": "When SLAs are consistently exceeded.", "isCorrect": false },
      { "text": "When SLAs cannot be measured due to lack of monitoring.", "isCorrect": false }
    ],
    "explanation": "The 'watermelon SLA' effect describes the situation where individual operational metrics (the 'green' outside) appear fine, but the customer's overall satisfaction and perception of the service (the 'red' inside) is negative. This highlights the importance of measuring user experience and outcomes, not just operational metrics."
  },
  {
    "question": "Which ITIL practice supports the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Service Desk", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Service Request Management", "isCorrect": true }
    ],
    "explanation": "The purpose of 'Service Request Management' is to handle all predefined, user-initiated service requests (e.g., requests for information, advice, access, or standard changes) efficiently and effectively."
  },
  {
    "question": "What is defined as a request from a user or user's authorized representative that initiates a service action which has been agreed as a normal part of service delivery?",
    "choices": [
      { "text": "Incident", "isCorrect": false },
      { "text": "Change", "isCorrect": false },
      { "text": "Service Request", "isCorrect": true },
      { "text": "Problem", "isCorrect": false }
    ],
    "explanation": "A 'service request' is a formal request from a user for something to be provided – for example, a request for information, advice, resetting a password, or installing a workstation for a new user."
  },
  {
    "question": "How should service requests and incidents be managed?",
    "choices": [
      { "text": "They should be managed using the exact same process.", "isCorrect": false },
      { "text": "Service requests should be handled by Problem Management.", "isCorrect": false },
      { "text": "Separate processes should be used, although they may use similar tools and techniques.", "isCorrect": true },
      { "text": "Incidents should always be treated as service requests.", "isCorrect": false }
    ],
    "explanation": "While often handled by the Service Desk, incidents (unplanned interruptions) and service requests (pre-defined requests for service) are distinct and should typically follow separate processes tailored to their nature. Service requests often follow pre-approved workflows."
  },
  {
    "question": "Which ITIL practice has the purpose of moving new or changed hardware, software, documentation, processes, or any other component to live environments?",
    "choices": [
      { "text": "Release Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Deployment Management", "isCorrect": true },
      { "text": "Service Configuration Management", "isCorrect": false }
    ],
    "explanation": "The purpose of 'Deployment Management' is to move new or changed hardware, software, documentation, processes, or other components to live environments. It may also be involved in deploying components to other environments for testing or staging."
  },
  {
    "question": "What is the relationship between Release Management and Deployment Management?",
    "choices": [
      { "text": "They are the same practice.", "isCorrect": false },
      { "text": "Deployment Management authorizes releases.", "isCorrect": false },
      { "text": "Release Management makes features available; Deployment Management moves components to environments.", "isCorrect": true },
      { "text": "Release Management manages hardware; Deployment Management manages software.", "isCorrect": false }
    ],
    "explanation": "Release Management focuses on making new/changed services and features *available* for use (often coordinating multiple deployments), while Deployment Management focuses on the physical or logical *movement* of components into target environments."
  },
  {
    "question": "What term describes 'a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks'?",
    "choices": [
      { "text": "A Practice", "isCorrect": false },
      { "text": "An Outcome", "isCorrect": false },
      { "text": "A Service", "isCorrect": true },
      { "text": "A Product", "isCorrect": false }
    ],
    "explanation": "This is the ITIL 4 definition of a 'service'. It emphasizes value co-creation and facilitating customer outcomes while managing associated costs and risks."
  },
  {
    "question": "What is a configuration of an organization's resources designed to offer value for a consumer?",
    "choices": [
      { "text": "A Service", "isCorrect": false },
      { "text": "A Product", "isCorrect": true },
      { "text": "A Practice", "isCorrect": false },
      { "text": "A Value Stream", "isCorrect": false }
    ],
    "explanation": "A 'product' is a configuration of resources, created by the organization, that will potentially be valuable for its consumers. Services are based on one or more products."
  },
  {
    "question": "What describes how a service provider delivers services based on one or more products?",
    "choices": [
      { "text": "Service Offering", "isCorrect": true },
      { "text": "Service Level Agreement", "isCorrect": false },
      { "text": "Service Catalogue", "isCorrect": false },
      { "text": "Service Portfolio", "isCorrect": false }
    ],
    "explanation": "A 'service offering' is a formal description of one or more services, designed to address the needs of a target consumer group. A service offering may include goods, access to resources, and service actions."
  },
  {
    "question": "What activities are performed by an organization to provide services?",
    "choices": [
      { "text": "Service Consumption", "isCorrect": false },
      { "text": "Service Relationship Management", "isCorrect": false },
      { "text": "Service Provision", "isCorrect": true },
      { "text": "Service Offering Management", "isCorrect": false }
    ],
    "explanation": "'Service provision' involves the activities performed by an organization to provide services, including management of resources, service access, and fulfillment of agreed service actions."
  },
  {
    "question": "What activities are performed by an organization to consume services?",
    "choices": [
      { "text": "Service Provision", "isCorrect": false },
      { "text": "Service Consumption", "isCorrect": true },
      { "text": "Demand Management", "isCorrect": false },
      { "text": "Supplier Management", "isCorrect": false }
    ],
    "explanation": "'Service consumption' involves the activities performed by an organization (or individual) to consume services, including managing consumer resources needed and utilizing the provider's services."
  },
  {
    "question": "Which component of the SVS provides the means by which an organization is directed and controlled?",
    "choices": [
      { "text": "Guiding Principles", "isCorrect": false },
      { "text": "Service Value Chain", "isCorrect": false },
      { "text": "Practices", "isCorrect": false },
      { "text": "Governance", "isCorrect": true }
    ],
    "explanation": "'Governance' is the means by which an organization is directed and controlled. It includes evaluation, direction, and monitoring (EDM) activities."
  },
  {
    "question": "What is a series of steps an organization undertakes to create and deliver products and services to consumers?",
    "choices": [
      { "text": "Practice", "isCorrect": false },
      { "text": "Value Stream", "isCorrect": true },
      { "text": "Process", "isCorrect": false },
      { "text": "Workflow", "isCorrect": false }
    ],
    "explanation": "A 'value stream' is a specific journey through the Service Value Chain for a particular scenario, representing the series of steps an organization takes to create and deliver products and services to consumers."
  },
  {
    "question": "Which guiding principle is MOST concerned with eliminating activities that do not contribute to the creation of value?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Keep it simple and practical", "isCorrect": true },
      { "text": "Optimize and automate", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": false }
    ],
    "explanation": "'Keep it simple and practical' directly addresses the need to eliminate waste, including processes, steps, or metrics that do not ultimately contribute value."
  },
  {
    "question": "Automation is primarily associated with which guiding principle?",
    "choices": [
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": false },
      { "text": "Optimize and automate", "isCorrect": true },
      { "text": "Collaborate and promote visibility", "isCorrect": false }
    ],
    "explanation": "The 'Optimize and automate' principle specifically calls out the use of technology to automate work to the greatest degree possible, after optimizing the process."
  },
  {
    "question": "Ensuring that service availability meets agreed needs falls under which aspect of warranty?",
    "choices": [
      { "text": "Capacity", "isCorrect": false },
      { "text": "Security", "isCorrect": false },
      { "text": "Continuity", "isCorrect": false },
      { "text": "Availability", "isCorrect": true }
    ],
    "explanation": "Warranty addresses whether a service is 'fit for use'. This includes aspects like availability (available when needed), capacity (sufficient performance), continuity (survives failure), and security (protected)."
  },
  {
    "question": "Which Service Value Chain activity is the main interface for handling user queries and requests?",
    "choices": [
      { "text": "Plan", "isCorrect": false },
      { "text": "Improve", "isCorrect": false },
      { "text": "Engage", "isCorrect": true },
      { "text": "Deliver & Support", "isCorrect": false }
    ],
    "explanation": "The 'Engage' activity is the primary point of interaction with stakeholders, including users, capturing needs, handling requests, and managing relationships."
  },
  {
    "question": "Which ITIL practice would be most involved in diagnosing the underlying cause of recurring server crashes?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Problem Management", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Monitoring and Event Management", "isCorrect": false }
    ],
    "explanation": "'Problem Management' is responsible for identifying and diagnosing the root causes of incidents (especially recurring ones) to prevent future occurrences."
  },
  {
    "question": "A user calls the service desk because they cannot access a shared network drive. What is this an example of?",
    "choices": [
      { "text": "A Problem", "isCorrect": false },
      { "text": "An Event", "isCorrect": false },
      { "text": "A Change Request", "isCorrect": false },
      { "text": "An Incident", "isCorrect": true }
    ],
    "explanation": "This represents an unplanned interruption or reduction in the quality of a service (access to the drive), which is the definition of an 'incident'."
  },
  {
    "question": "A user submits a request for a new laptop via an online portal. What is this an example of?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Service Request", "isCorrect": true },
      { "text": "A Problem", "isCorrect": false },
      { "text": "An Emergency Change", "isCorrect": false }
    ],
    "explanation": "This is a request for a pre-defined, standard service action (providing a new laptop), which falls under the definition of a 'service request'."
  },
  {
    "question": "Which dimension focuses on the skills and competencies of staff?",
    "choices": [
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "Value Streams and Processes", "isCorrect": false },
      { "text": "Organizations and People", "isCorrect": true }
    ],
    "explanation": "The 'Organizations and People' dimension explicitly covers aspects like skills, competencies, roles, responsibilities, and organizational culture."
  },
  {
    "question": "Which practice is responsible for managing relationships with third-party vendors?",
    "choices": [
      { "text": "Service Level Management", "isCorrect": false },
      { "text": "Supplier Management", "isCorrect": true },
      { "text": "Relationship Management", "isCorrect": false },
      { "text": "IT Asset Management", "isCorrect": false }
    ],
    "explanation": "'Supplier Management' is specifically focused on managing the organization's suppliers and their performance, including contract management."
  },
  {
    "question": "What should be the FIRST step when applying the 'Start where you are' guiding principle?",
    "choices": [
      { "text": "Design the target state.", "isCorrect": false },
      { "text": "Assess the current state objectively.", "isCorrect": true },
      { "text": "Implement quick wins.", "isCorrect": false },
      { "text": "Optimize existing processes.", "isCorrect": false }
    ],
    "explanation": "Before deciding what to reuse or change, 'Start where you are' requires an objective assessment and understanding of the existing situation."
  },
  {
    "question": "Which practice ensures that CIs are identified, baseline, and changes controlled?",
    "choices": [
      { "text": "IT Asset Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Service Configuration Management", "isCorrect": true },
      { "text": "Release Management", "isCorrect": false }
    ],
    "explanation": "'Service Configuration Management' is responsible for identifying CIs, maintaining their records and relationships in a CMS/CMDB, establishing baselines, and ensuring changes are tracked."
  },
  {
    "question": "What is the primary output of the 'Engage' value chain activity?",
    "choices": [
      { "text": "Service components", "isCorrect": false },
      { "text": "Improvement initiatives", "isCorrect": false },
      { "text": "Requirements and demand information", "isCorrect": true },
      { "text": "Resolved incidents", "isCorrect": false }
    ],
    "explanation": "The 'Engage' activity gathers stakeholder needs, which translates into requirements for services and provides input regarding demand for the rest of the value chain."
  },
  {
    "question": "Feedback loops are critical for which guiding principle?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false }
    ],
    "explanation": "The 'Progress iteratively with feedback' principle relies heavily on feedback loops at each iteration to ensure actions remain focused on current needs and allow for course correction."
  },
  {
    "question": "Which ITIL concept ensures services deliver agreed levels of performance, addressing 'how the service performs'?",
    "choices": [
      { "text": "Utility", "isCorrect": false },
      { "text": "Value", "isCorrect": false },
      { "text": "Warranty", "isCorrect": true },
      { "text": "Outcome", "isCorrect": false }
    ],
    "explanation": "'Warranty' provides assurance on performance aspects like availability, capacity, continuity, and security, determining if the service is 'fit for use'."
  },
  {
    "question": "Which practice is the entry point for reporting operational issues?",
    "choices": [
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Service Desk", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Monitoring and Event Management", "isCorrect": false }
    ],
    "explanation": "The 'Service Desk' acts as the single point of contact for users to report incidents and make service requests."
  },
  {
    "question": "Which Service Value Chain activity takes requirements from 'Design & Transition' and produces service components?",
    "choices": [
      { "text": "Plan", "isCorrect": false },
      { "text": "Improve", "isCorrect": false },
      { "text": "Engage", "isCorrect": false },
      { "text": "Obtain/Build", "isCorrect": true }
    ],
    "explanation": "The 'Obtain/Build' activity acquires or builds service components based on the specifications provided by 'Design & Transition'."
  },
  {
    "question": "Which guiding principle encourages seeing the bigger picture and understanding how different parts of the organization work together?",
    "choices": [
      { "text": "Collaborate and promote visibility", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false },
      { "text": "Focus on value", "isCorrect": false }
    ],
    "explanation": "'Think and work holistically' emphasizes understanding the system as a whole and the interactions between its parts, avoiding siloed thinking."
  },
  {
    "question": "What is the primary focus of the 'Deliver & Support' value chain activity?",
    "choices": [
      { "text": "Designing new services", "isCorrect": false },
      { "text": "Ensuring services operate as expected and resolving issues", "isCorrect": true },
      { "text": "Planning future strategy", "isCorrect": false },
      { "text": "Building service components", "isCorrect": false }
    ],
    "explanation": "'Deliver & Support' is concerned with the ongoing operational delivery of services according to agreements and providing user support, including managing incidents."
  },
  {
    "question": "Which practice uses techniques like SWOT analysis, balanced scorecard reviews, and maturity assessments?",
    "choices": [
      { "text": "Service Level Management", "isCorrect": false },
      { "text": "Risk Management", "isCorrect": false },
      { "text": "Continual Improvement", "isCorrect": true },
      { "text": "Problem Management", "isCorrect": false }
    ],
    "explanation": "These are common techniques used within the 'Continual Improvement' practice to assess the current situation, identify opportunities, and measure progress."
  },
  {
    "question": "Which dimension includes considerations about workflow management and inventory systems?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": true },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "Value Streams and Processes", "isCorrect": false }
    ],
    "explanation": "Technologies like workflow management, inventory systems, knowledge bases, and communication systems fall under the 'Information and Technology' dimension."
  },
  {
    "question": "A change request is submitted to upgrade the main CRM application. Which practice is PRIMARILY responsible for assessing the risks and authorizing this change?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Release Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": true },
      { "text": "Service Request Management", "isCorrect": false }
    ],
    "explanation": "'Change Enablement' is the practice responsible for managing the lifecycle of all changes, including assessment, authorization, and scheduling."
  },
  {
    "question": "What is the term for the amount of money spent on a specific activity or resource?",
    "choices": [
      { "text": "Value", "isCorrect": false },
      { "text": "Price", "isCorrect": false },
      { "text": "Cost", "isCorrect": true },
      { "text": "Budget", "isCorrect": false }
    ],
    "explanation": "'Cost' refers to the amount of money spent on a specific activity or resource. Costs can be removed from the consumer (part of the value proposition) or imposed on the consumer."
  },
  {
    "question": "What is a possible event that could cause harm or loss, or make it more difficult to achieve objectives?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Problem", "isCorrect": false },
      { "text": "A Risk", "isCorrect": true },
      { "text": "An Issue", "isCorrect": false }
    ],
    "explanation": "A 'risk' is a possible event that could cause harm or loss, or make it more difficult to achieve objectives. Risk management involves identifying, assessing, and controlling risks."
  },
  {
    "question": "Which practice is most concerned with ensuring that service availability, capacity, and continuity meet agreed targets?",
    "choices": [
      { "text": "Service Level Management", "isCorrect": true },
      { "text": "Incident Management", "isCorrect": false },
      { "text": "IT Asset Management", "isCorrect": false },
      { "text": "Supplier Management", "isCorrect": false }
    ],
    "explanation": "'Service Level Management' negotiates and agrees on service level targets, which typically include measures for availability, capacity, and continuity (often detailed in supporting practices like Availability and Capacity Management, whose principles feed into SLAs)."
  },
  {
    "question": "What is the purpose of the 'Improve' value chain activity?",
    "choices": [
      { "text": "To ensure services meet specifications.", "isCorrect": false },
      { "text": "To ensure understanding of stakeholder needs.", "isCorrect": false },
      { "text": "To ensure continual improvement across the SVS.", "isCorrect": true },
      { "text": "To ensure components are available when needed.", "isCorrect": false }
    ],
    "explanation": "The 'Improve' activity focuses specifically on driving improvements across all aspects of the Service Value System, including products, services, and practices."
  },
  {
    "question": "Which guiding principle supports the use of existing tools and data before creating new ones?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Start where you are", "isCorrect": true },
      { "text": "Optimize and automate", "isCorrect": false },
      { "text": "Keep it simple and practical", "isCorrect": false }
    ],
    "explanation": "'Start where you are' encourages leveraging what is already available, including data, processes, tools, and skills, rather than discarding them unnecessarily."
  },
  {
    "question": "Which is NOT a key focus of the 'Information and Technology' dimension?",
    "choices": [
      { "text": "Information architecture", "isCorrect": false },
      { "text": "Skills and competencies of staff", "isCorrect": true },
      { "text": "Communication systems", "isCorrect": false },
      { "text": "Workflow management tools", "isCorrect": false }
    ],
    "explanation": "Skills and competencies of staff are part of the 'Organizations and People' dimension, not 'Information and Technology'."
  },
  {
    "question": "What does the Service Value System (SVS) describe?",
    "choices": [
      { "text": "The specific steps to resolve an incident.", "isCorrect": false },
      { "text": "How an organization's components and activities work together to facilitate value co-creation.", "isCorrect": true },
      { "text": "The structure of the service desk.", "isCorrect": false },
      { "text": "The relationship between CIs in a CMDB.", "isCorrect": false }
    ],
    "explanation": "The ITIL SVS provides the overall picture of how demand is converted into value through a system comprising guiding principles, governance, the service value chain, practices, and continual improvement."
  },
  {
    "question": "Which practice aims to capture demand for incident resolution and service requests?",
    "choices": [
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Service Desk", "isCorrect": true },
      { "text": "Service Level Management", "isCorrect": false }
    ],
    "explanation": "The 'Service Desk' is the entry point for users and is responsible for capturing demand, primarily in the form of incidents and service requests."
  },
  {
    "question": "What term describes the cooperation between a service provider and service consumer?",
    "choices": [
      { "text": "Service Provision", "isCorrect": false },
      { "text": "Service Consumption", "isCorrect": false },
      { "text": "Service Relationship Management", "isCorrect": true },
      { "text": "Service Offering", "isCorrect": false }
    ],
    "explanation": "'Service Relationship Management' refers to the joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings."
  },
  {
    "question": "If a monitoring tool detects that server disk space is critically low, what has occurred?",
    "choices": [
      { "text": "An Incident", "isCorrect": false },
      { "text": "A Problem", "isCorrect": false },
      { "text": "An Event", "isCorrect": true },
      { "text": "A Change", "isCorrect": false }
    ],
    "explanation": "A detected change of state (disk space crossing a threshold) that has significance for managing the server (a CI) is an 'event'. This event might trigger an incident if service is impacted, or it might be informational or a warning."
  },
  {
    "question": "Documenting a workaround is an activity primarily associated with which practice?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Problem Management", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Continual Improvement", "isCorrect": false }
    ],
    "explanation": "Identifying and documenting workarounds is a key activity within 'Problem Management', specifically during the Problem Control phase, often leading to the creation of a Known Error record."
  },
  {
    "question": "Which value chain activity transforms requirements and specifications into actual service components?",
    "choices": [
      { "text": "Design & Transition", "isCorrect": false },
      { "text": "Obtain/Build", "isCorrect": true },
      { "text": "Deliver & Support", "isCorrect": false },
      { "text": "Engage", "isCorrect": false }
    ],
    "explanation": "The 'Obtain/Build' activity is where service components are created, purchased, or reused based on the designs and specifications from 'Design & Transition'."
  },
  {
    "question": "Which practice helps ensure that services achieve agreed and expected performance levels?",
    "choices": [
      { "text": "Supplier Management", "isCorrect": false },
      { "text": "Service Level Management", "isCorrect": true },
      { "text": "Incident Management", "isCorrect": false },
      { "text": "IT Asset Management", "isCorrect": false }
    ],
    "explanation": "'Service Level Management' sets the targets (SLAs) and monitors performance against them, driving actions to ensure agreed levels are met."
  },
  {
    "question": "Which is a key input to the 'Plan' value chain activity?",
    "choices": [
      { "text": "Resolved incidents", "isCorrect": false },
      { "text": "Organizational strategy and policies", "isCorrect": true },
      { "text": "New service components", "isCorrect": false },
      { "text": "User support tasks", "isCorrect": false }
    ],
    "explanation": "The 'Plan' activity needs input regarding the overall direction, strategy, policies, and portfolio decisions from governance and management to create plans for the SVS."
  },
  {
    "question": "Which dimension considers external factors like legislation and competition?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": false },
      { "text": "PESTLE Factors (implicitly considered across all dimensions)", "isCorrect": true }
    ],
    "explanation": "While not a dimension itself, ITIL 4 highlights the importance of external factors (Political, Economic, Social, Technological, Legal, Environmental - PESTLE) which influence all four dimensions."
  },
  {
    "question": "What is the MAIN benefit of using an ITIL practice?",
    "choices": [
      { "text": "To reduce all operational costs.", "isCorrect": false },
      { "text": "To provide a standardized approach for managing certain aspects of service management.", "isCorrect": true },
      { "text": "To guarantee project success.", "isCorrect": false },
      { "text": "To eliminate the need for a service desk.", "isCorrect": false }
    ],
    "explanation": "ITIL practices provide a structured and commonly understood set of resources and recommendations for performing specific work or achieving objectives within service management."
  },
  {
    "question": "Which guiding principle is MOST relevant when deciding whether to automate a poorly defined manual process?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Optimize and automate", "isCorrect": true },
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Keep it simple and practical", "isCorrect": false }
    ],
    "explanation": "The 'Optimize and automate' principle emphasizes that optimization should precede automation. Automating a flawed or inefficient process will likely yield poor results."
  },
  {
    "question": "What describes the structure and management of an organization, including roles, responsibilities, and systems of authority?",
    "choices": [
      { "text": "Governance", "isCorrect": false },
      { "text": "Organizational structure (within Organizations and People dimension)", "isCorrect": true },
      { "text": "Service Value Chain", "isCorrect": false },
      { "text": "Continual Improvement Register", "isCorrect": false }
    ],
    "explanation": "The formal system of authority, roles, responsibilities, and communication lines are part of the organizational structure, which falls under the 'Organizations and People' dimension."
  },
  {
    "question": "Which practice manages CIs and the relationships between them?",
    "choices": [
      { "text": "IT Asset Management", "isCorrect": false },
      { "text": "Service Configuration Management", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Deployment Management", "isCorrect": false }
    ],
    "explanation": "'Service Configuration Management' is specifically tasked with maintaining information about CIs and their interdependencies."
  },
  {
    "question": "What is the primary role of the 'Improve' value chain activity in relation to other SVC activities?",
    "choices": [
      { "text": "To provide requirements for them.", "isCorrect": false },
      { "text": "To build components used by them.", "isCorrect": false },
      { "text": "To identify and action improvement opportunities across all of them.", "isCorrect": true },
      { "text": "To deliver the outputs created by them.", "isCorrect": false }
    ],
    "explanation": "The 'Improve' activity receives performance information and improvement opportunities from all other value chain activities and feeds improvement actions back into them."
  },
  {
    "question": "Which statement about value co-creation is CORRECT?",
    "choices": [
      { "text": "Value is created solely by the service provider.", "isCorrect": false },
      { "text": "Value is created solely by the service consumer.", "isCorrect": false },
      { "text": "Value is created through active collaboration between providers and consumers.", "isCorrect": true },
      { "text": "Value is primarily determined by the cost of the service.", "isCorrect": false }
    ],
    "explanation": "A core concept in ITIL 4 is that value is co-created through the interaction and collaboration between the service provider, the consumer, and potentially other stakeholders."
  },
  {
    "question": "Which process step is part of the typical Incident Management process?",
    "choices": [
      { "text": "Root cause analysis", "isCorrect": false },
      { "text": "Logging and categorization", "isCorrect": true },
      { "text": "Change authorization", "isCorrect": false },
      { "text": "Service level target negotiation", "isCorrect": false }
    ],
    "explanation": "Logging, categorization, and prioritization are key initial steps in the Incident Management process. Root cause analysis belongs to Problem Management."
  },
  {
    "question": "What is the BEST description of a 'service level agreement' (SLA)?",
    "choices": [
      { "text": "An agreement between the service provider and a supplier.", "isCorrect": false },
      { "text": "An agreement between internal teams within the service provider.", "isCorrect": false },
      { "text": "An agreement between the service provider and the customer.", "isCorrect": true },
      { "text": "A list of all services offered by the provider.", "isCorrect": false }
    ],
    "explanation": "An SLA specifically documents the agreement on service levels between the service provider and its external customer."
  },
  {
    "question": "Which is an example of an IT Asset?",
    "choices": [
      { "text": "A user's satisfaction score.", "isCorrect": false },
      { "text": "A company laptop.", "isCorrect": true },
      { "text": "A documented process.", "isCorrect": false },
      { "text": "A service level target.", "isCorrect": false }
    ],
    "explanation": "An IT Asset is any financially valuable component contributing to service delivery. A company laptop fits this definition. Satisfaction scores, processes, and targets are not typically considered IT assets in this context."
  },
  {
    "question": "Which practice focuses on making services and features available for use?",
    "choices": [
      { "text": "Deployment Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Release Management", "isCorrect": true },
      { "text": "Service Request Management", "isCorrect": false }
    ],
    "explanation": "'Release Management' coordinates the release schedule and ensures that new or changed services and features are made available to users."
  },
  {
    "question": "Which guiding principle is demonstrated by understanding the impact of a change on different teams and services?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Think and work holistically", "isCorrect": true },
      { "text": "Keep it simple and practical", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": false }
    ],
    "explanation": "'Think and work holistically' encourages considering the end-to-end impact and interdependencies across the organization, rather than focusing narrowly on one area."
  },
  {
    "question": "What is the relationship between Problems and Incidents?",
    "choices": [
      { "text": "Problems are caused by unresolved incidents.", "isCorrect": false },
      { "text": "Incidents are caused by problems.", "isCorrect": true },
      { "text": "Problems and incidents are the same thing.", "isCorrect": false },
      { "text": "Incidents must be resolved before problems can be identified.", "isCorrect": false }
    ],
    "explanation": "A problem is the underlying cause of one or more (actual or potential) incidents. Incident management focuses on restoring service quickly, while problem management focuses on finding and resolving the root cause."
  },
  {
    "question": "Which practice would manage a user's request for access to a specific application?",
    "choices": [
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Service Request Management", "isCorrect": true },
      { "text": "Information Security Management", "isCorrect": false }
    ],
    "explanation": "Requests for access are typically handled as standard service requests through the 'Service Request Management' practice, following a pre-defined and often pre-approved workflow."
  },
  {
    "question": "What is the purpose of Governance within the SVS?",
    "choices": [
      { "text": "To perform day-to-day operational tasks.", "isCorrect": false },
      { "text": "To direct and control the organization.", "isCorrect": true },
      { "text": "To define specific process steps.", "isCorrect": false },
      { "text": "To manage relationships with suppliers.", "isCorrect": false }
    ],
    "explanation": "Governance provides the framework for directing and controlling the organization through evaluation, direction, and monitoring to ensure alignment with objectives."
  },
  {
    "question": "Which dimension is PRIMARILY concerned with contracts and agreements with third parties?",
    "choices": [
      { "text": "Organizations and People", "isCorrect": false },
      { "text": "Information and Technology", "isCorrect": false },
      { "text": "Partners and Suppliers", "isCorrect": true },
      { "text": "Value Streams and Processes", "isCorrect": false }
    ],
    "explanation": "The 'Partners and Suppliers' dimension specifically addresses the relationships, contracts, agreements, and management of external organizations involved in the service lifecycle."
  },
  {
    "question": "What is a Known Error?",
    "choices": [
      { "text": "An incident that has occurred multiple times.", "isCorrect": false },
      { "text": "A problem that has been analyzed and has a documented workaround.", "isCorrect": true },
      { "text": "A risk that has been identified but not mitigated.", "isCorrect": false },
      { "text": "A change that failed during implementation.", "isCorrect": false }
    ],
    "explanation": "A Known Error is created when a problem's root cause has been identified and a workaround has been developed. It is stored in the Known Error Database (KEDB) for reference during incident resolution."
  },
  {
    "question": "Which Guiding Principle encourages learning and improving from each iteration?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Start where you are", "isCorrect": false },
      { "text": "Progress iteratively with feedback", "isCorrect": true },
      { "text": "Collaborate and promote visibility", "isCorrect": false }
    ],
    "explanation": "The 'Progress iteratively with feedback' principle uses feedback gathered during and after each iteration to learn and improve the approach for subsequent iterations."
  },
  {
    "question": "Which value chain activity ensures service components meet agreed specifications?",
    "choices": [
      { "text": "Engage", "isCorrect": false },
      { "text": "Design & Transition", "isCorrect": false },
      { "text": "Obtain/Build", "isCorrect": true },
      { "text": "Deliver & Support", "isCorrect": false }
    ],
    "explanation": "The 'Obtain/Build' activity is responsible for acquiring or creating service components according to the specifications provided, ensuring they are fit for purpose before being transitioned."
  },
  {
    "question": "What is the primary goal of the 'Keep it simple and practical' guiding principle?",
    "choices": [
      { "text": "To automate everything possible.", "isCorrect": false },
      { "text": "To use the minimum steps needed to achieve the outcome.", "isCorrect": true },
      { "text": "To involve as many stakeholders as possible.", "isCorrect": false },
      { "text": "To reuse existing processes without change.", "isCorrect": false }
    ],
    "explanation": "This principle advises using outcome-based thinking to eliminate waste and complexity, ensuring that processes and actions are straightforward and contribute directly to value."
  },
  {
    "question": "Which practice involves managing Configuration Items (CIs)?",
    "choices": [
      { "text": "IT Asset Management", "isCorrect": false },
      { "text": "Service Configuration Management", "isCorrect": true },
      { "text": "Incident Management", "isCorrect": false },
      { "text": "Problem Management", "isCorrect": false }
    ],
    "explanation": "'Service Configuration Management' is directly responsible for identifying, recording, controlling, and verifying CIs and their relationships."
  },
  {
    "question": "Which Service Value Chain activity is MOST likely to use information from the Continual Improvement Register (CIR)?",
    "choices": [
      { "text": "Engage", "isCorrect": false },
      { "text": "Deliver & Support", "isCorrect": false },
      { "text": "Improve", "isCorrect": true },
      { "text": "Obtain/Build", "isCorrect": false }
    ],
    "explanation": "The 'Improve' activity utilizes the Continual Improvement Register (CIR), which tracks improvement ideas, to manage and prioritize improvement initiatives across the SVS."
  },
  {
    "question": "What is the BEST definition of 'Utility' in the context of a service?",
    "choices": [
      { "text": "Assurance that a service meets requirements.", "isCorrect": false },
      { "text": "The functionality offered by the service ('what it does').", "isCorrect": true },
      { "text": "The perceived benefit of the service.", "isCorrect": false },
      { "text": "The cost associated with the service.", "isCorrect": false }
    ],
    "explanation": "'Utility' refers to the features and functionality of a service that enable it to meet a particular need or achieve specific outcomes - essentially, what the service does ('fit for purpose')."
  },
  {
    "question": "Which practice is responsible for handling user calls about service disruptions?",
    "choices": [
      { "text": "Problem Management", "isCorrect": false },
      { "text": "Service Desk and Incident Management", "isCorrect": true },
      { "text": "Change Enablement", "isCorrect": false },
      { "text": "Service Level Management", "isCorrect": false }
    ],
    "explanation": "The 'Service Desk' is the point of contact, and 'Incident Management' is the practice focused on addressing and resolving service disruptions (incidents) reported by users or monitoring."
  },
  {
    "question": "What is the purpose of the 'Design and Transition' value chain activity?",
    "choices": [
      { "text": "To handle user requests.", "isCorrect": false },
      { "text": "To ensure products and services meet stakeholder expectations.", "isCorrect": true },
      { "text": "To identify the root cause of problems.", "isCorrect": false },
      { "text": "To manage relationships with suppliers.", "isCorrect": false }
    ],
    "explanation": "The 'Design and Transition' activity focuses on creating specifications for new or changed services and ensuring they are effectively introduced into the live environment, meeting expectations for quality, cost, and time-to-market."
  },
  {
    "question": "Which guiding principle is MOST associated with reducing waste?",
    "choices": [
      { "text": "Focus on value", "isCorrect": false },
      { "text": "Keep it simple and practical", "isCorrect": true },
      { "text": "Collaborate and promote visibility", "isCorrect": false },
      { "text": "Start where you are", "isCorrect": false }
    ],
    "explanation": "'Keep it simple and practical' directly addresses eliminating steps, processes, or metrics that do not add value, which is a key aspect of reducing waste."
  },
  {
    "question": "What is the primary focus of IT Asset Management (ITAM)?",
    "choices": [
      { "text": "Managing the relationships between service components.", "isCorrect": false },
      { "text": "Managing the lifecycle and value of IT assets.", "isCorrect": true },
      { "text": "Restoring normal service operation quickly.", "isCorrect": false },
      { "text": "Making new features available for use.", "isCorrect": false }
    ],
    "explanation": "ITAM focuses on managing IT assets (hardware, software, licenses etc.) throughout their lifecycle to maximize value, control costs, manage risks, and support decision making about purchase, reuse, and retirement."
  },
  {
    "question": "Which ITIL concept represents 'joint activities performed by a provider and consumer to ensure continual value co-creation'?",
    "choices": [
        { "text": "Service Provision", "isCorrect": false },
        { "text": "Service Consumption", "isCorrect": false },
        { "text": "Service Relationship Management", "isCorrect": true },
        { "text": "Service Offering", "isCorrect": false }
    ],
    "explanation": "Service Relationship Management encompasses the interactions and collaborations between the service provider and consumer necessary for the ongoing co-creation of value."
  },
  {
    "question": "Which guiding principle would help prioritize multiple improvement opportunities?",
    "choices": [
        { "text": "Start where you are", "isCorrect": false },
        { "text": "Focus on value", "isCorrect": true },
        { "text": "Keep it simple and practical", "isCorrect": false },
        { "text": "Optimize and automate", "isCorrect": false }
    ],
    "explanation": "The 'Focus on value' principle guides prioritization by assessing which opportunities offer the most value to stakeholders, helping decide where to invest limited resources."
  },
  {
    "question": "What is the BEST description of the ITIL Continual Improvement Model?",
    "choices": [
        { "text": "A model for managing supplier contracts.", "isCorrect": false },
        { "text": "A structured approach for implementing improvements.", "isCorrect": true },
        { "text": "A framework for classifying incidents.", "isCorrect": false },
        { "text": "A method for calculating service costs.", "isCorrect": false }
    ],
    "explanation": "The Continual Improvement Model provides a step-by-step methodology (What is the vision?, Where are we now?, etc.) to guide improvement initiatives."
  },
  {
    "question": "Which value chain activity is responsible for user communication during major incidents?",
    "choices": [
        { "text": "Plan", "isCorrect": false },
        { "text": "Improve", "isCorrect": false },
        { "text": "Deliver & Support (incorporating Service Desk/Incident Management)", "isCorrect": true },
        { "text": "Obtain/Build", "isCorrect": false }
    ],
    "explanation": "While 'Engage' handles initial stakeholder interaction, the operational communication during an ongoing incident typically falls under 'Deliver & Support', executed via practices like Incident Management and the Service Desk."
  },
  {
    "question": "What type of change is typically associated with resolving a major incident?",
    "choices": [
        { "text": "Standard Change", "isCorrect": false },
        { "text": "Normal Change", "isCorrect": false },
        { "text": "Emergency Change", "isCorrect": true },
        { "text": "Service Request", "isCorrect": false }
    ],
    "explanation": "An 'Emergency Change' is used when a change is needed urgently to restore service or prevent significant impact, often associated with resolving major incidents."
  }
];