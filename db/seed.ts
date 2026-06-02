// @ts-nocheck
import { getDb } from "../api/queries/connection";
import {
  contacts,
  deals,
  activities,
  projects,
  tasks,
  services,
  emailTemplates,
} from "./schema";

async function seed() {
  const db = getDb();

  console.log("Seeding OmegaElz CRM data...");

  // Seed contacts
  const contactData = [
    { firstName: "SABSA", lastName: "Representative", email: "info@sabsa.co.za", phone: "+27 11 123 4567", company: "SABSA", jobTitle: "IT Manager", status: "customer" as const, source: "referral" as const, score: 85, assignedTo: null, city: "Johannesburg", country: "South Africa", notes: "Website development, business email, social media management. 4-page website project." },
    { firstName: "Lizorah", lastName: "Brand Manager", email: "contact@lizorah.com", phone: "+27 82 345 6789", company: "Lizorah Brand", jobTitle: "Brand Director", status: "customer" as const, source: "website" as const, score: 72, assignedTo: null, city: "Pretoria", country: "South Africa", notes: "Website development, business registration, social media creation and optimization." },
    { firstName: "Thabo", lastName: "Chibuwe", email: "thabo@chibuwec.co.za", phone: "+27 71 456 7890", company: "Chibuwe Construction", jobTitle: "Owner", status: "customer" as const, source: "cold_call" as const, score: 90, assignedTo: null, city: "Johannesburg", country: "South Africa", notes: "Website development, domain hosting, business email setup. Quick turnaround project." },
    { firstName: "Beast", lastName: "Initiatives", email: "info@beastinitiatives.com", phone: "+27 63 567 8901", company: "BeastInitiatives", jobTitle: "Founder", status: "customer" as const, source: "social" as const, score: 95, assignedTo: null, city: "Cape Town", country: "South Africa", notes: "International client. Website design, operational strategy, digital business consultation." },
    { firstName: "Sarah", lastName: "Mokoena", email: "sarah@techstart.co.za", phone: "+27 72 678 9012", company: "TechStart SA", jobTitle: "CEO", status: "lead" as const, source: "event" as const, score: 45, assignedTo: null, city: "Durban", country: "South Africa", notes: "Interested in AI automation package. Met at tech conference." },
    { firstName: "David", lastName: "van der Merwe", email: "david@vanderconsulting.co.za", phone: "+27 83 789 0123", company: "Van der Merwe Consulting", jobTitle: "Managing Director", status: "prospect" as const, source: "referral" as const, score: 68, assignedTo: null, city: "Pretoria", country: "South Africa", notes: "Referred by SABSA. Needs CRM implementation and business documentation." },
    { firstName: "Nomsa", lastName: "Dlamini", email: "nomsa@dlaminidesigns.co.za", phone: "+27 64 890 1234", company: "Dlamini Designs", jobTitle: "Creative Director", status: "lead" as const, source: "social" as const, score: 38, assignedTo: null, city: "Johannesburg", country: "South Africa", notes: "Graphic design agency looking for web development partnership." },
    { firstName: "Peter", lastName: "Okafor", email: "peter@globaltrade.ng", phone: "+234 80 901 2345", company: "Global Trade Nigeria", jobTitle: "Operations Manager", status: "lead" as const, source: "website" as const, score: 55, assignedTo: null, city: "Lagos", country: "Nigeria", notes: "International lead. Interested in business documentation and company registration services." },
    { firstName: "Anne-Marie", lastName: "du Preez", email: "am@dupreezlegal.co.za", phone: "+27 71 012 3456", company: "Du Preez Legal", jobTitle: "Partner", status: "prospect" as const, source: "referral" as const, score: 78, assignedTo: null, city: "Cape Town", country: "South Africa", notes: "Law firm needing IT support and cloud migration. High-value prospect." },
    { firstName: "Kabelo", lastName: "Mashaba", email: "kabelo@mashabafitness.co.za", phone: "+27 82 123 4567", company: "Mashaba Fitness", jobTitle: "Owner", status: "lead" as const, source: "cold_call" as const, score: 30, assignedTo: null, city: "Bloemfontein", country: "South Africa", notes: "Fitness brand startup. Needs logo design, website, and social media management." },
  ];

  await db.insert(contacts).values(contactData);
  console.log(`Inserted ${contactData.length} contacts`);

  // Seed deals
  const dealData = [
    { title: "SABSA Website & Digital Package", contactId: 1, company: "SABSA", value: "4050.00", currency: "ZAR", stage: "negotiation" as const, probability: 85, expectedCloseDate: "2026-06-15", description: "Website development, business email setup, social media management, domain registration, hosting configuration", assignedTo: null },
    { title: "Lizorah Brand Digital Transformation", contactId: 2, company: "Lizorah Brand", value: "3000.00", currency: "ZAR", stage: "proposal" as const, probability: 60, expectedCloseDate: "2026-07-01", description: "Website development, business registration assistance, social media creation and optimization", assignedTo: null },
    { title: "Chibuwe Construction Web Package", contactId: 3, company: "Chibuwe Construction", value: "1050.00", currency: "ZAR", stage: "won" as const, probability: 100, expectedCloseDate: "2026-05-30", actualCloseDate: "2026-05-29", description: "Website development, domain hosting, business email setup, social media creation", assignedTo: null },
    { title: "BeastInitiatives Global Strategy", contactId: 4, company: "BeastInitiatives", value: "11069.73", currency: "ZAR", stage: "won" as const, probability: 100, expectedCloseDate: "2026-05-15", actualCloseDate: "2026-05-10", description: "Website design, operational strategy development, digital business consultation - International transfer", assignedTo: null },
    { title: "TechStart AI Automation Package", contactId: 5, company: "TechStart SA", value: "8500.00", currency: "ZAR", stage: "qualified" as const, probability: 40, expectedCloseDate: "2026-07-30", description: "AI Starter Package - Chatbot, workflow automation, email management, basic CRM setup", assignedTo: null },
    { title: "Van der Merwe CRM Implementation", contactId: 6, company: "Van der Merwe Consulting", value: "12500.00", currency: "ZAR", stage: "proposal" as const, probability: 55, expectedCloseDate: "2026-08-15", description: "CRM system implementation, business documentation, workflow automation", assignedTo: null },
    { title: "Dlamini Design Partnership", contactId: 7, company: "Dlamini Designs", value: "4500.00", currency: "ZAR", stage: "new" as const, probability: 25, expectedCloseDate: "2026-09-01", description: "Web development partnership for design clients", assignedTo: null },
    { title: "Global Trade Business Setup", contactId: 8, company: "Global Trade Nigeria", value: "7500.00", currency: "ZAR", stage: "qualified" as const, probability: 45, expectedCloseDate: "2026-08-30", description: "Company registration, business documentation, compliance services", assignedTo: null },
    { title: "Du Preez Legal IT Migration", contactId: 9, company: "Du Preez Legal", value: "18000.00", currency: "ZAR", stage: "proposal" as const, probability: 70, expectedCloseDate: "2026-07-20", description: "IT support, cloud migration, network setup, security configuration", assignedTo: null },
    { title: "Mashaba Fitness Startup Package", contactId: 10, company: "Mashaba Fitness", value: "2800.00", currency: "ZAR", stage: "new" as const, probability: 20, expectedCloseDate: "2026-09-15", description: "Logo design, website, social media management", assignedTo: null },
  ];

  await db.insert(deals).values(dealData);
  console.log(`Inserted ${dealData.length} deals`);

  // Seed projects
  const projectData = [
    { projectCode: "OE001", title: "SABSA Digital Presence", clientId: 1, description: "Complete digital transformation for SABSA including website, email, and social media", services: ["Website Development", "Business Email Setup", "Social Media Management", "Domain Registration", "Hosting Configuration"], status: "in_progress" as const, startDate: "2026-05-04", endDate: "2026-06-07", budget: "4500.00", revenue: "4050.00", received: "3500.00", outstanding: "550.00", priority: "high" as const },
    { projectCode: "OE002", title: "Lizorah Brand Launch", clientId: 2, description: "Brand development and digital launch for Lizorah", services: ["Website Development", "Business Registration Assistance", "Social Media Creation", "Social Media Optimization"], status: "in_progress" as const, startDate: "2026-02-06", endDate: "2026-07-15", budget: "3500.00", revenue: "3000.00", received: "0.00", outstanding: "3000.00", priority: "medium" as const },
    { projectCode: "OE003", title: "Chibuwe Construction Web Setup", clientId: 3, description: "Rapid website deployment for Chibuwe Construction", services: ["Website Development", "Domain Hosting", "Business Email Setup", "Social Media Creation"], status: "completed" as const, startDate: "2026-05-28", endDate: "2026-05-29", budget: "1200.00", revenue: "1050.00", received: "1050.00", outstanding: "0.00", priority: "high" as const },
    { projectCode: "OE004", title: "BeastInitiatives Global Strategy", clientId: 4, description: "International client strategy and web development", services: ["Website Design", "Operational Strategy Development", "Digital Business Consultation"], status: "completed" as const, startDate: "2026-03-01", endDate: "2026-05-10", budget: "12000.00", revenue: "11069.73", received: "11069.73", outstanding: "0.00", priority: "urgent" as const },
    { projectCode: "OE005", title: "TechStart AI Integration", clientId: 5, description: "AI automation package implementation for TechStart", services: ["AI Chatbot", "Workflow Automation", "AI Email Management", "Basic CRM Setup"], status: "planning" as const, startDate: "2026-07-01", endDate: "2026-08-30", budget: "10000.00", revenue: "8500.00", received: "0.00", outstanding: "8500.00", priority: "medium" as const },
    { projectCode: "OE006", title: "Van der Merwe Digital Office", clientId: 6, description: "Complete digital office setup for consulting firm", services: ["CRM Implementation", "Business Documentation", "Workflow Automation", "Cloud Solutions"], status: "planning" as const, startDate: "2026-07-15", endDate: "2026-09-30", budget: "15000.00", revenue: "12500.00", received: "0.00", outstanding: "12500.00", priority: "high" as const },
  ];

  await db.insert(projects).values(projectData);
  console.log(`Inserted ${projectData.length} projects`);

  // Seed tasks
  const taskData = [
    { title: "Complete SABSA website homepage design", description: "Finalize the homepage layout and responsive design", status: "in_progress" as const, priority: "high" as const, dueDate: new Date("2026-06-05"), contactId: 1, projectId: 1 },
    { title: "Setup business email for SABSA", description: "Configure Google Workspace email accounts", status: "todo" as const, priority: "medium" as const, dueDate: new Date("2026-06-06"), contactId: 1, projectId: 1 },
    { title: "Lizorah brand identity review", description: "Review and finalize brand guidelines document", status: "todo" as const, priority: "medium" as const, dueDate: new Date("2026-06-10"), contactId: 2, projectId: 2 },
    { title: "Submit business registration docs for Lizorah", description: "Complete CIPC registration process", status: "todo" as const, priority: "high" as const, dueDate: new Date("2026-06-15"), contactId: 2, projectId: 2 },
    { title: "Follow up with TechStart AI proposal", description: "Send detailed AI automation proposal", status: "todo" as const, priority: "high" as const, dueDate: new Date("2026-06-08"), contactId: 5 },
    { title: "Prepare CRM demo for Van der Merwe", description: "Create personalized CRM demonstration", status: "todo" as const, priority: "medium" as const, dueDate: new Date("2026-06-12"), contactId: 6 },
    { title: "Design Mashaba Fitness logo concepts", description: "Create 3-5 logo design concepts", status: "todo" as const, priority: "low" as const, dueDate: new Date("2026-06-20"), contactId: 10 },
    { title: "Du Preez Legal IT assessment", description: "On-site IT infrastructure assessment", status: "todo" as const, priority: "high" as const, dueDate: new Date("2026-06-10"), contactId: 9 },
    { title: "Monthly social media content for SABSA", description: "Create and schedule June social media posts", status: "review" as const, priority: "medium" as const, dueDate: new Date("2026-06-07"), contactId: 1, projectId: 1 },
    { title: "Update OmegaElz service catalog", description: "Add new AI services to the catalog", status: "done" as const, priority: "low" as const, dueDate: new Date("2026-06-01"), contactId: null },
    { title: "Send invoice for Chibuwe project", description: "Issue final invoice for completed work", status: "done" as const, priority: "medium" as const, dueDate: new Date("2026-05-30"), contactId: 3, projectId: 3 },
    { title: "BeastInitiatives project handover", description: "Complete project documentation and handover", status: "done" as const, priority: "high" as const, dueDate: new Date("2026-05-12"), contactId: 4, projectId: 4 },
  ];

  await db.insert(tasks).values(taskData.map(t => ({ ...t, assignedTo: null, dealId: null, createdBy: 1 })));
  console.log(`Inserted ${taskData.length} tasks`);

  // Seed activities
  const activityData = [
    { type: "email" as const, contactId: 1, dealId: 1, userId: 1, title: "Sent website mockup to SABSA", description: "Shared Figma designs for review", status: "completed" as const },
    { type: "call" as const, contactId: 2, dealId: 2, userId: 1, title: "Discovery call with Lizorah Brand", description: "Discussed brand requirements and timeline", status: "completed" as const, duration: 45 },
    { type: "meeting" as const, contactId: 5, dealId: 5, userId: 1, title: "AI demo for TechStart", description: "Presented AI automation capabilities", status: "completed" as const, duration: 60 },
    { type: "note" as const, contactId: 9, dealId: 9, userId: 1, title: "Du Preez requirements gathered", description: "IT infrastructure needs documented", status: "completed" as const },
    { type: "task" as const, contactId: 6, dealId: 6, userId: 1, title: "Send CRM proposal to Van der Merwe", description: "Include pricing and implementation timeline", status: "pending" as const, dueDate: new Date("2026-06-12") },
    { type: "email" as const, contactId: 3, userId: 1, title: "Chibuwe project completion email", description: "Sent final deliverables and login credentials", status: "completed" as const },
    { type: "call" as const, contactId: 8, dealId: 8, userId: 1, title: "Follow-up with Global Trade Nigeria", description: "Discussed documentation requirements for international operations", status: "completed" as const, duration: 30 },
    { type: "meeting" as const, contactId: 4, userId: 1, title: "BeastInitiatives strategy session", description: "Final review of operational strategy document", status: "completed" as const, duration: 90 },
  ];

  await db.insert(activities).values(activityData);
  console.log(`Inserted ${activityData.length} activities`);

  // Seed services
  const serviceData = [
    { name: "Website Design (Basic)", category: "web_dev" as const, description: "3-5 page responsive website with basic SEO", priceMin: "1500.00", priceMax: "3500.00", pricingUnit: "per_project" as const },
    { name: "Website Design (Advanced)", category: "web_dev" as const, description: "5-10 page website with advanced features", priceMin: "3500.00", priceMax: "7000.00", pricingUnit: "per_project" as const },
    { name: "E-commerce Development", category: "web_dev" as const, description: "Full online store with payment integration", priceMin: "6000.00", priceMax: "15000.00", pricingUnit: "per_project" as const },
    { name: "Logo Design", category: "graphic_design" as const, description: "Professional logo with 3-5 concepts", priceMin: "500.00", priceMax: "1200.00", pricingUnit: "fixed" as const },
    { name: "Brand Identity Package", category: "graphic_design" as const, description: "Complete branding solution", priceMin: "6000.00", priceMax: "18000.00", pricingUnit: "per_project" as const },
    { name: "Social Media Management", category: "marketing" as const, description: "Content creation and platform management", priceMin: "1500.00", priceMax: "3500.00", pricingUnit: "per_month" as const },
    { name: "Company Registration", category: "business_doc" as const, description: "CIPC company registration and incorporation", priceMin: "1750.00", priceMax: "3500.00", pricingUnit: "fixed" as const },
    { name: "Business Plan Development", category: "business_doc" as const, description: "Comprehensive business plan with financials", priceMin: "800.00", priceMax: "2500.00", pricingUnit: "per_project" as const },
    { name: "IT Support", category: "tech_services" as const, description: "Remote technical support and troubleshooting", priceMin: "120.00", priceMax: "250.00", pricingUnit: "per_hour" as const },
    { name: "Network Setup", category: "tech_services" as const, description: "Office network infrastructure setup", priceMin: "2500.00", priceMax: "8000.00", pricingUnit: "per_project" as const },
    { name: "Cloud Migration", category: "tech_services" as const, description: "Data and systems migration to cloud", priceMin: "8000.00", priceMax: "18000.00", pricingUnit: "per_project" as const },
    { name: "Video Editing", category: "creative" as const, description: "Professional video editing services", priceMin: "300.00", priceMax: "800.00", pricingUnit: "per_hour" as const },
    { name: "Virtual Assistant", category: "admin" as const, description: "Remote administrative support", priceMin: "120.00", priceMax: "300.00", pricingUnit: "per_hour" as const },
    { name: "Business Consultation", category: "consultation" as const, description: "Strategic business planning and advice", priceMin: "500.00", priceMax: "1200.00", pricingUnit: "per_hour" as const },
    { name: "AI Chatbot Development", category: "ai_automation" as const, description: "Custom AI chatbot for customer engagement", priceMin: "7500.00", priceMax: "75000.00", pricingUnit: "per_project" as const },
    { name: "Workflow Automation", category: "ai_automation" as const, description: "Business process automation setup", priceMin: "3500.00", priceMax: "15000.00", pricingUnit: "per_project" as const },
    { name: "CRM Implementation", category: "crm" as const, description: "CRM system setup and configuration", priceMin: "5500.00", priceMax: "25000.00", pricingUnit: "per_project" as const },
    { name: "Data Analytics Setup", category: "data_analytics" as const, description: "Business intelligence and analytics dashboard", priceMin: "10000.00", priceMax: "45000.00", pricingUnit: "per_project" as const },
    { name: "AI Content Generation", category: "ai_automation" as const, description: "AI-powered content creation", priceMin: "2500.00", priceMax: "8000.00", pricingUnit: "per_month" as const },
    { name: "SEO Optimization", category: "marketing" as const, description: "Search engine optimization services", priceMin: "5000.00", priceMax: "18000.00", pricingUnit: "per_month" as const },
  ];

  await db.insert(services).values(serviceData);
  console.log(`Inserted ${serviceData.length} services`);

  // Seed email templates
  const templateData = [
    { name: "Welcome Email", subject: "Welcome to OmegaElz - Your Digital Success Starts Here", body: "<html><body><h2>Welcome to OmegaElz!</h2><p>Dear {{name}},</p><p>Thank you for choosing OmegaElz for your digital solutions. We're excited to work with you.</p><p>Our team will be in touch shortly to discuss your project requirements.</p><p>Best regards,<br>The OmegaElz Team<br>+27 70 757 9866</p></body></html>", category: "welcome" as const },
    { name: "Follow-up Template", subject: "Following up on our recent conversation", body: "<html><body><p>Hi {{name}},</p><p>I hope this email finds you well. I wanted to follow up on our recent conversation about {{topic}}.</p><p>Please let me know if you have any questions or if there's anything else I can help with.</p><p>Best regards,<br>{{sender_name}}<br>OmegaElz</p></body></html>", category: "follow_up" as const },
    { name: "Proposal Template", subject: "Your Custom Proposal from OmegaElz", body: "<html><body><h2>Your Proposal</h2><p>Dear {{name}},</p><p>Thank you for the opportunity to work with {{company}}. Please find attached our detailed proposal.</p><p>Project Value: R{{value}}</p><p>Timeline: {{timeline}}</p><p>We look forward to your feedback.</p></body></html>", category: "proposal" as const },
    { name: "Invoice Reminder", subject: "Payment Reminder - Invoice {{invoice_number}}", body: "<html><body><p>Dear {{name}},</p><p>This is a friendly reminder that invoice {{invoice_number}} for R{{amount}} is due on {{due_date}}.</p><p>Please let us know if you have any questions.</p><p>Thank you,<br>OmegaElz Finance Team</p></body></html>", category: "invoice" as const },
    { name: "Task Reminder", subject: "Reminder: {{task_name}} due soon", body: "<html><body><p>Hi {{name}},</p><p>This is a reminder that the task &quot;{{task_name}}&quot; is due on {{due_date}}.</p><p>Please ensure it is completed on time.</p><p>Best,<br>OmegaElz Team</p></body></html>", category: "reminder" as const },
  ];

  await db.insert(emailTemplates).values(templateData);
  console.log(`Inserted ${templateData.length} email templates`);

  console.log("\nSeeding complete!");
}

seed().catch(console.error);
