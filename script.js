// --- Rotating Roles ---
const roles = [
    "Data Scientist",
    "Music Data Engineer",
    "Machine Learning Developer",
    "Research Assistant",
    "AI Solutions Architect"
  ];
  let currentRoleIndex = 0;
  const roleElement = document.getElementById('role-rotator');
  function updateRole() {
    roleElement.style.opacity = 0;
    setTimeout(() => {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      roleElement.textContent = roles[currentRoleIndex];
      roleElement.style.opacity = 1;
    }, 400);
  }
  setInterval(updateRole, 2600);
  
  // --- Skills Data ---
  const skills = [
    {
      title: "Programming Languages",
      list: ["Python", "Java", "R", "MATLAB", "C", "C++"]
    },
    {
      title: "Machine Learning & Computer Vision",
      list: ["PyTorch", "TensorFlow", "Keras", "Generative AI", "OpenCV", "SIFT", "Text Mining", "Sentiment Analysis"]
    },
    {
      title: "Database & Cloud",
      list: ["Neo4j", "Hadoop", "HBase", "GCP", "Cassandra", "PostgreSQL", "MongoDB", "Django", "AWS", "Azure", "Databricks"]
    },
    {
      title: "Data Visualization & Tools",
      list: ["Tableau", "MS Excel", "RStudio", "Docker", "Git", "Jenkins", "CI/CD Pipeline"]
    },
    {
      title: "Big Data & Logging",
      list: ["ELK Stack", "Apache Spark", "Apache Kafka"]
    },
    {
      title: "Other Skills",
      list: ["Feature Engineering", "Statistical Analysis", "Model Validation", "Forecasting", "A/B Testing", "API Development"]
    }
  ];
  const skillsCards = document.getElementById('skills-cards');
  skills.forEach((skill, idx) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-title">${skill.title}</div>
      <div class="skill-list">${skill.list.join(', ')}</div>
    `;
    skillsCards.appendChild(card);
  });
  
  // --- Projects Data ---
  const projects = [
    {
      title: "Generative AI for Personalized Drug Treatments",
      desc: "Developed a Generative AI model with Random Forest to predict Adverse Drug Reactions (ADRs) based on genetic profiles. Achieved 78.49% accuracy and improved drug efficacy by 20%.",
      tech: ["Python", "TensorFlow", "Random Forest"],
      link: "https://github.com/AnushaG-P/Impact-of-Generative-AI-on-Personalized-Drug-Treatments-for-Pre-existing-Conditions"
    },
    {
      title: "Hand Joint Detection using Computer Vision",
      desc: "Optimized Detectron2 for 98% accuracy in finger joint identification using OpenCV and scikit-learn. Deployed on Streamlit for real-time interaction.",
      tech: ["Python", "OpenCV", "scikit-learn", "Streamlit"],
      link: "https://github.com/AnushaG-P/hand_joint_detection_CV_Deep-Learning"
    },
    {
      title: "Market Basket Insights with Tableau",
      desc: "Developed Tableau dashboards for market basket analysis, integrating R for statistical modeling. Improved visualization clarity by 25% and model accuracy by 30%.",
      tech: ["R", "Tableau", "K-means", "SVM", "Random Forest"],
      link: "https://github.com/AnushaG-P/R-Tableau-Analystics-Project"
    },
    {
      title: "Morgan Stanley Hackathon: Food Waste Reduction",
      desc: "Backend developer for a statistical modeling solution that increased community outreach by 32% and reduced food waste by 40%.",
      tech: ["NodeJS", "MongoDB"],
      link: "https://www.linkedin.com/posts/anusha-guruprasad_winner-for-morgan-stanley-hackathon-activity-7058062389019045888-HQln?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3-lRwB3ezW1oqLJpV3-dnHGzYPvcvYAvg"
    }
  ];
  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    // Use GitHub icon for github links, LinkedIn for others
    const isGitHub = project.link.includes('github.com');
    const iconClass = isGitHub ? 'fab fa-github' : 'fab fa-linkedin';
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      <div class="project-tech">${project.tech.join(', ')}</div>
      <a class="project-link" href="${project.link}" target="_blank" aria-label="${isGitHub ? 'GitHub' : 'LinkedIn'}">
        <i class="${iconClass}"></i>
      </a>
    `;
    projectsList.appendChild(card);
  });
  
  // --- Experience Data ---
  const experience = [
    {
      title: "Music Data Engineer (Contract)",
      company: "Arco Data Design Inc.",
      date: "Feb 2025 - Present",
      desc: "Designed and maintained Python-based data ingestion pipelines using Pandas and PostgreSQL to integrate and standardize large-scale music catalog datasets. Automated deployment via GitHub Actions, built Django-based applications, and implemented CI/CD pipelines for 99% uptime."
    },
    {
      title: "Senior Machine Learning Developer",
      company: "Shoptaki",
      date: "Sep 2024 - Mar 2025",
      desc: "Designed time series forecasting with XGBoost, developed dashboards, and led a team to improve investment conversions and property tax estimation models. Developed Adobe Analytics dashboards to visualize trends and predictions."
    },
    {
      title: "Graduate Research Assistant",
      company: "Pace University",
      date: "2023 - 2024",
      desc: "Led research on host-pathogen dynamics, automated R pipelines for mass-spec data, and co-authored a peer-reviewed paper presented at ASPB Hawaii."
    },
    {
      title: "Associate Application Developer",
      company: "Unisys",
      date: "Sep 2020 - Jul 2022",
      desc: "Led a DevOps team, developed a Java-based travel platform on AWS, implemented ELK Stack for monitoring, and automated CI/CD pipelines."
    }
  ];
  
  const timeline = document.getElementById('timeline');
  experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-title">${exp.title}</div>
      <div class="timeline-company">${exp.company}</div>
      <div class="timeline-date">${exp.date}</div>
      <div class="timeline-desc">${exp.desc}</div>
    `;
    timeline.appendChild(item);
  });
  
  // Show footer only when user scrolls to the bottom
  window.addEventListener('scroll', function() {
    const footer = document.getElementById('main-footer');
    // Check if user is at the bottom (with a small threshold for mobile)
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });
  