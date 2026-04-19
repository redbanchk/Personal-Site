import React from 'react';
import { Briefcase, Code, Users, Brain, Globe, Github, Mail, Linkedin, FileText, Phone, MessageSquare } from 'lucide-react';
import { Experience, Project, Skill, SocialLink } from './types';

// Personal Info
export const PERSONAL_INFO = {
  nameZh: "何坤冀",
  nameEn: "Kunji He",
  titleZh: "AI赋能业务专员",
  titleEn: "AI-Enabled Business Specialist",
  taglineZh: "识别一线业务痛点，用AI工具驱动效率提升与流程优化",
  taglineEn: "Turning frontline business pain points into measurable efficiency gains with AI tools.",
  summaryZh: "男 | 24岁 | 3年工作经验 | 期望城市：泰安",
  summaryEn: "Male | 24 | 3 Years Experience | Target City: Tai'an",
  aboutZh: "具备业务场景挖掘与AI工具开发落地实战经验，擅长识别一线业务痛点并通过技术手段提效。拥有效果监控与迭代优化意识，能用量化指标验证工具成效；具备团队AI工具培训与推广能力，曾主导新人带训与标准化流程沉淀；跨部门协作经验丰富，学习敏锐度高，能快速适应业务变化与技术迭代，精通Python并具备程序开发能力。",
  aboutEn: "Hands-on experience in business scenario discovery and AI tool implementation. Skilled at identifying frontline pain points and improving efficiency through practical technical solutions. Strong in result monitoring and iterative optimization with measurable indicators, team enablement and SOP training, cross-functional collaboration, and rapid adaptation to changing business needs. Proficient in Python development.",
  email: "1094822072@qq.com",
  locationZh: "泰安",
  locationEn: "Tai'an, China",
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
  { name: '个人网站', url: 'https://mypersonalsite.readingassistant.top', icon: <Globe className="w-5 h-5" /> },
  { name: '邮箱', url: 'mailto:1094822072@qq.com', icon: <Mail className="w-5 h-5" /> },
];

// Skills / Advantages
export const SKILLS: Skill[] = [
  {
    titleZh: "业务场景挖掘",
    titleEn: "Business Scenario Discovery",
    descriptionZh: "深度调研一线业务流程，精准识别翻译、口语、作文等场景下的数据质量与执行痛点，并抽象为可执行的规则体系。",
    descriptionEn: "Deeply investigates frontline workflows and identifies data quality or execution bottlenecks, then converts them into practical and executable standards.",
    icon: "Brain"
  },
  {
    titleZh: "AI工具开发与提效",
    titleEn: "AI Tool Development",
    descriptionZh: "能将重复性校验工作工具化，独立开发中英文标点与格式检测工具，实现问题高亮定位，显著减少人工排查耗时。",
    descriptionEn: "Builds practical AI-enabled utilities for repetitive tasks, including punctuation and formatting validation with automatic highlighting.",
    icon: "Code"
  },
  {
    titleZh: "效果监控与迭代优化",
    titleEn: "Monitoring & Iteration",
    descriptionZh: "具备过程化进度跟踪与质量抽检能力，能够通过量化指标验证工具与数据方案成效，并持续迭代优化交付质量。",
    descriptionEn: "Uses measurable indicators, progress tracking, and quality sampling to validate impact and continuously improve delivery outcomes.",
    icon: "Briefcase"
  },
  {
    titleZh: "团队培训与标准化",
    titleEn: "Team Enablement & SOP",
    descriptionZh: "曾协助完成新人带训，沉淀标注操作手册与质量检查清单，降低团队上手成本并提升协作一致性。",
    descriptionEn: "Supports onboarding and team enablement by creating SOPs and quality checklists that reduce ramp-up time and improve consistency.",
    icon: "Users"
  },
  {
    titleZh: "跨部门协作与学习能力",
    titleEn: "Cross-Functional Collaboration",
    descriptionZh: "跨部门协作经验丰富，能够在业务、运营与技术之间高效沟通；学习敏锐度高，可快速适应业务变化和技术迭代。",
    descriptionEn: "Experienced in cross-team collaboration and fast context switching, with strong adaptability to business changes and technology updates.",
    icon: "Globe"
  }
];

// Experience
export const EXPERIENCES: Experience[] = [
  {
    companyZh: "阿里巴巴（中国）有限公司",
    companyEn: "Alibaba (China) Co., Ltd.",
    roleZh: "数据标注 / AI训练师",
    roleEn: "Data Annotation / AI Trainer",
    period: "2025.04 - 2025.10",
    descriptionZh: [
      "夸克大模型“夸克老师”英语SFT数据标注项目：深度调研翻译、口语、作文等学习场景，识别数据质量痛点并制定词汇、句式、逻辑等多维标注标准。",
      "团队培训赋能：协助项目经理完成新人带训与标准化培训，沉淀标注操作手册与质量检查清单，降低团队上手成本。",
      "效果监控与交付：统筹8人标注团队，通过进度跟踪与质量抽检机制，交付5,000条高质量SFT训练数据，直接支撑模型英语交互能力优化。",
      "个人主导AI提效工具开发：针对中英文标点混用与格式不规范问题，独立开发自动化检测工具，实现智能识别与高亮标注，一键定位格式问题。"
    ],
    descriptionEn: [
      "Quark LLM 'Quark Teacher' SFT: Investigated English learning scenarios and defined multi-dimensional labeling standards for vocabulary, sentence structure, and logic.",
      "Team Enablement: Assisted onboarding and standardized training, producing operation manuals and quality checklists.",
      "Delivery & Monitoring: Coordinated an 8-member team and delivered 5,000 high-quality SFT records with process tracking and quality sampling.",
      "Personal AI Utility: Built an automated punctuation and formatting checker to highlight issues and reduce manual verification effort."
    ]
  },
  {
    companyZh: "上海淳业仪表科技有限公司",
    companyEn: "Shanghai Chunye Instrument Technology",
    roleZh: "外贸业务员",
    roleEn: "Foreign Trade Sales Representative",
    period: "2024.08 - 2024.12",
    descriptionZh: [
      "平台运营与AI提效：负责MIC中国制造网平台日常运营，使用AI工具整理产品信息、翻译多语种文件、批量优化商品上架文案，提升产品页专业度与上架效率。",
      "客户对接支持：利用AI快速生成客户询盘回复话术与产品技术参数说明，提升响应速度与专业度，辅助完成水质检测仪器及仪表产品的海外客户开发与维护。"
    ],
    descriptionEn: [
      "Platform Operation: Managed MIC listings and used AI tools for multilingual translation, product information structuring, and bulk copy optimization.",
      "Client Support: Used AI to generate inquiry responses and technical parameter explanations, improving response speed and professionalism."
    ]
  },
  {
    companyZh: "衡阳幼儿师范高等专科学校",
    companyEn: "Hengyang Preschool Education College",
    roleZh: "英语教师（实习）",
    roleEn: "English Teacher (Intern)",
    period: "2024.03 - 2024.06",
    descriptionZh: [
      "采用互动式教学方法，通过小组协作任务、课堂即兴问答、情景模拟交流等形式激活课堂氛围，显著提升学生课堂参与率与语言表达兴趣。",
      "负责作业与考试全流程设计评估，建立标准化评价体系，确保评价客观精准；并针对薄弱点提供及时反馈与个性化辅导方案。"
    ],
    descriptionEn: [
      "Applied interactive teaching methods (group tasks, impromptu Q&A, scenario simulation) to improve engagement and speaking participation.",
      "Designed and evaluated assignments and exams with standardized assessment criteria, then provided timely feedback and personalized tutoring."
    ]
  },
  {
    companyZh: "衡阳市第十六中学",
    companyEn: "Hengyang No.16 Middle School",
    roleZh: "英语教师 / 班主任（实习）",
    roleEn: "English Teacher / Homeroom Teacher (Intern)",
    period: "2023.09 - 2023.12",
    descriptionZh: [
      "独立完成初高中英语课程备课、授课、作业批改及学情分析，针对学生差异实施分层教学与个性化错题辅导。",
      "建立班级量化考核制度并组建学习互助小组，结合主题班会与家校沟通提升班级管理成效。",
      "任职一学期内，所带班级英语平均分从年级第9名跃升至第5名，整体及格率提升18%，班级获评“优秀进步集体”。"
    ],
    descriptionEn: [
      "Handled full-cycle teaching tasks for junior and senior English classes with differentiated instruction and targeted error correction support.",
      "Implemented class management mechanisms, peer-learning groups, and regular home-school communication.",
      "Within one semester, class average ranking improved from 9th to 5th in grade and pass rate increased by 18%."
    ]
  }
];

// Projects
export const PROJECTS: Project[] = [
  {
    titleZh: "阅读助手",
    titleEn: "Reading Assistant",
    categoryZh: "个人项目 / 独立开发（2025.11-至今）",
    categoryEn: "Personal Project / Solo Development",
    descriptionZh: "开发个人阅读管理工具，支持ISBN扫码/输入添加书籍、阅读进度可视化记录（当前页/总页数/百分比）与阅读时长统计；搭建固定时段邮件提醒机制，自动推送在读进度摘要。",
    descriptionEn: "A personal reading management tool with ISBN add-book support, progress visualization, reading duration tracking, and scheduled email reminders.",
    techStack: ["Python", "Database Design", "Frontend", "Task Scheduler"],
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
    isPersonal: true
  },
  {
    titleZh: "诸葛亮角色扮演大模型",
    titleEn: "Zhuge Liang Roleplay LLM",
    categoryZh: "个人项目 / 独立开发（2025.11-至今）",
    categoryEn: "Personal Project / Solo Development",
    descriptionZh: "基于兴趣驱动的大模型场景化实践，自主收集《三国演义》《三国志》等文献素材，优化Prompt与微调参数，还原角色对话风格与历史知识储备。",
    descriptionEn: "A scenario-based LLM practice project that recreates Zhuge Liang's speaking style and knowledge base through curated historical corpora and prompt/parameter optimization.",
    techStack: ["Python", "Prompt Engineering", "LLM Fine-tuning", "Data Curation"],
    imageUrl: "./avatar.jpg",
    isPersonal: true
  },
  {
    titleZh: "AI驱动热点新闻信息推送系统",
    titleEn: "AI-Driven Hot News Push System",
    categoryZh: "个人项目 / 独立开发（2025.10-至今）",
    categoryEn: "Personal Project / Solo Development",
    descriptionZh: "基于个人信息获取需求，融合爬虫抓取主流平台热点，通过大模型完成内容筛选、摘要生成与智能分类，并搭建定时邮件推送机制。",
    descriptionEn: "An automated information assistant that crawls trending topics, uses LLMs for filtering/summarization/classification, and sends scheduled email digests.",
    techStack: ["Python", "Web Crawling", "LLM Summarization", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop",
    isPersonal: true
  },
  {
    titleZh: "个人网站",
    titleEn: "Personal Website",
    categoryZh: "个人项目 / 独立开发（2025.10-至今）",
    categoryEn: "Personal Project / Solo Development",
    descriptionZh: "围绕个人经历与项目展示搭建响应式作品集网站，持续维护内容与展示结构，支持对外访问。",
    descriptionEn: "A continuously maintained responsive portfolio website for showcasing personal background and projects.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop",
    demoUrl: "https://mypersonalsite.readingassistant.top",
    isPersonal: true
  }
];
