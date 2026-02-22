export type SkillItem = {
    name: string;
    icon?: string;
    color?: string;
};

export type ProjectType = {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    stats?: { label: string; value: string }[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
};

export type InternshipType = {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    achievements: string[];
};

export type AchievementType = {
    id: string;
    title: string;
    organization: string;
    date: string;
    description: string;
    badge?: string;
};

export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
