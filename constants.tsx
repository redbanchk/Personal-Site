import React from 'react';
import { Briefcase, Code, Users, Brain, Globe, Github, Mail, Linkedin, FileText, Phone, MessageSquare } from 'lucide-react';
import { Experience, Project, Skill, SocialLink } from './types';

// Personal Info
export const PERSONAL_INFO = {
  nameZh: "何坤冀",
  nameEn: "Kunji He",
  titleZh: "AI产品经理",
  titleEn: "AI Product Manager",
  taglineZh: "链接复杂AI模型与用户核心需求的桥梁",
  taglineEn: "Bridging the gap between Complex AI Models and User-Centric Products",
  summaryZh: "男 | 24岁 | 3年工作经验 | 衡阳师范大学 | 英语师范",
  summaryEn: "Male | 24 Years Old | 3 Years Exp | Hengyang Normal University | English Education",
  aboutZh: "具备全链路产品实战能力，覆盖需求挖掘、数据分析、文档输出、功能设计、场景适配、落地迭代的完整流程。擅长将 AI 技术与实际业务场景深度结合，优化产品功能适配性与用户体验。在「人人都是产品经理」平台持续输出 AI 产品设计原创文章。",
  aboutEn: "I possess full-cycle product capabilities, from requirements gathering to data-driven iteration. I specialize in combining AI technologies (LLMs, NLP) with practical business scenarios to solve real-world problems. I actively publish original articles on AI product design.",
  email: "kunji.he@example.com", 
  locationZh: "中国",
  locationEn: "China",
  portrait1_1: "./portrait_1_1.jpg", // Please save your Blue Suit photo as portrait_1_1.jpg in the public/root folder
  portrait2_3: "./portrait_2_3.jpg", // Please save your Dark Suit/Hand-on-chin photo as portrait_2_3.jpg in the public/root folder
};

// Contact Info
export const CONTACT_INFO = {
  qq: "1094822072",
  wechat: "wxid_nmug95dn0acs22",
  email: "1094822072@qq.com",
  phone: "15367600031"
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/redbanchk', icon: <Github className="w-5 h-5" /> },
  { 
    name: '人人都是产品经理', 
    url: 'https://www.woshipm.com/u/1628826', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M224 320h144l144 160 144-160h144v576h-128V480l-160 192-160-192v416h-128V320z" />
      </svg>
    ) 
  },
];

// Skills / Advantages
export const SKILLS: Skill[] = [
  {
    titleZh: "产品思维与业务适配素养",
    titleEn: "Product Thinking & Business Fit",
    descriptionZh: "具备全链路产品实战能力，从用户调研与业务痛点拆解出发，熟练输出PRD、产品流程图。擅长将AI技术与实际业务场景深度结合，推动产品从0到1落地。",
    descriptionEn: "Full-cycle capability: PRD, flowcharts, data analysis, and user research. Proven track record in translating user pain points into prioritized features and driving 0-1 product launches.",
    icon: "Brain"
  },
  {
    titleZh: "团队管理与统筹能力",
    titleEn: "Team Management",
    descriptionZh: "拥有AI项目跨角色协作实战经验，统筹8人标注团队，联动算法与运营部门。通过过程化管理与复盘优化，兼顾团队执行效率与成果质量。",
    descriptionEn: "Experience leading cross-functional teams (Dev, Ops, Labeling). Skilled in task decomposition, progress tracking, and quality assurance for high-efficiency delivery.",
    icon: "Users"
  },
  {
    titleZh: "AI项目实战专长",
    titleEn: "AI Implementation",
    descriptionZh: "深耕AI数据标注、模型训练与产品落地全流程。能通过数据分析定位模型与产品痛点，针对性输出优化方案，保障AI项目全链路效果。",
    descriptionEn: "Expertise in SFT data labeling, model training workflows, and prompt engineering. Proficient in diagnosing model issues via data analysis to optimize performance.",
    icon: "Briefcase"
  },
  {
    titleZh: "技术开发与应用能力",
    titleEn: "Technical Proficiency",
    descriptionZh: "精通C++、Python，熟练运用Workflow自动化工具。具备扎实的技术逻辑，能参与技术选型与核心模块实现，通过脚本开发提升工作效率。",
    descriptionEn: "Proficient in Python, C++, and Workflow automation tools. Capable of technical feasibility analysis, script development for automation, and tech stack selection.",
    icon: "Code"
  },
  {
    titleZh: "英语专业与教研优势",
    titleEn: "Language & Research",
    descriptionZh: "英语师范专业背景，专四证书持有者。擅长将英语教学场景逻辑融入多语言AI产品设计，精准完成跨文化场景的需求拆解与规则制定。",
    descriptionEn: "English Major background with TEM-4 certification. Specialized in applying linguistic logic to NLP product design and cross-cultural business scenarios.",
    icon: "Globe"
  }
];

// Experience
export const EXPERIENCES: Experience[] = [
  {
    companyZh: "阿里巴巴（中国）有限公司",
    companyEn: "Alibaba (China) Co., Ltd.",
    roleZh: "AI产品经理",
    roleEn: "AI Product Manager",
    period: "2025.04 - 2025.10",
    descriptionZh: [
      "夸克大模型“夸克老师”英语SFT标注项目：主导标注规则体系搭建，统筹8人团队交付5千条高质量数据，建立统一可信的标注规范。",
      "海外团队邮件自动化通知中台：设计全流程自动化邮件通知机制，解决跨时空协作痛点，团队使用率达90%，协作效率提升20%。",
      "企业级私有AI集成平台：主导集成文本、图像、视频多模态模型，实现本地安全调用与实时协作，提升团队响应效率40%。"
    ],
    descriptionEn: [
      "Quark LLM 'Quark Teacher' SFT Project: Led English learning data labeling rules. Managed an 8-person team to deliver 5,000+ high-quality SFT entries.",
      "Overseas Mail Automation Platform: Designed automated notification system, increasing cross-department collaboration efficiency by 20%.",
      "Enterprise AI Integration Platform: Integrated multi-modal models into a secure local environment with real-time collaboration, improving efficiency by 40%."
    ]
  },
  {
    companyZh: "上海淳业仪表科技有限公司",
    companyEn: "Shanghai Chunye Instrument Technology",
    roleZh: "AI技术负责人 / 外贸运营专员",
    roleEn: "AI Tech Lead / Foreign Trade Ops",
    period: "2024.08 - 2024.12",
    descriptionZh: [
      "AI技术负责人：主导私有大模型本地化部署（Qwen 1.5 7B），搭建外贸AI对话系统，回复速度提升60%。",
      "外贸运营：负责MIC中国制造网和阿里国际平台运营，优化SEO与产品展示，提升曝光与触达效率。"
    ],
    descriptionEn: [
      "AI Tech Lead: Led local deployment of Qwen 1.5 7B model. Built a customized AI dialogue system, increasing response speed by 60%.",
      "Foreign Trade Ops: Optimized SEO and product listings for MIC and Alibaba International platforms."
    ]
  }
];

// Projects
export const PROJECTS: Project[] = [
  {
    titleZh: "企业级私有AI集成平台",
    titleEn: "Enterprise AI Integration Platform",
    categoryZh: "工作项目 / 阿里巴巴",
    categoryEn: "Work / Alibaba",
    descriptionZh: "聚焦数据安全，集成主流多模态模型，支持本地/内网调用。创新设计小组级共享协作模块，实现AI生成文件在线预览与多人协作。",
    descriptionEn: "Secure, local-first AI platform integrating multi-modal models. Features real-time collaborative editing and data compliance.",
    techStack: ["Product Design", "System Integration", "Security Compliance"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    demoUrl: "https://aistudio.readingassistant.top/",
    isPersonal: false
  },
  {
    titleZh: "海外邮件自动化通知中台",
    titleEn: "Overseas Mail Automation Hub",
    categoryZh: "工作项目 / 阿里巴巴",
    categoryEn: "Work / Alibaba",
    descriptionZh: "针对跨时空协作，设计全流程通知机制。支持双身份权限管理，进度实时同步与逾期提醒，大幅提升协作效率。",
    descriptionEn: "Solved cross-timezone collaboration issues via automated notifications. Features hierarchy management and progress tracking.",
    techStack: ["Workflow Automation", "Product Management", "UX Design"],
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop",
    demoUrl: "https://timesync.readingassistant.top/tasks",
    isPersonal: false
  },
  {
    titleZh: "诸葛亮角色扮演大模型",
    titleEn: "Zhuge Liang Roleplay LLM",
    categoryZh: "个人项目 / 微调",
    categoryEn: "Personal / Fine-tuning",
    descriptionZh: "独立完成开源大模型轻量化微调，收集《三国演义》素材，还原角色风格。全程自主推进数据整理、参数配置与部署。",
    descriptionEn: "Independent lightweight fine-tuning of an open-source LLM. Curated datasets to replicate character style. Managed pipeline from data cleaning to deployment.",
    techStack: ["Python", "PyTorch", "LLM Fine-tuning", "Prompt Engineering"],
    imageUrl: "./avatar.jpg", 
    githubUrl: "https://github.com/redbanchk/wolong-chat",
    demoUrl: "https://wolongchat.readingassistant.top/",
    isPersonal: true
  },
  {
    titleZh: "AI驱动热点新闻推送系统",
    titleEn: "AI News Push System",
    categoryZh: "个人开发 / 全栈",
    categoryEn: "Personal / Full Stack",
    descriptionZh: "融合爬虫与AI技术，抓取热点新闻并自动摘要分类，实现每日邮件推送。独立完成技术选型、开发测试与上线。",
    descriptionEn: "Automated system combining crawlers and AI summarization. Scrapes trending news, filters via AI, and sends daily digests.",
    techStack: ["Python", "Web Scraping", "NLP", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/redbanchk/TrendRadar2.1",
    demoUrl: "https://newsreport.readingassistant.top/",
    isPersonal: true
  }
];
