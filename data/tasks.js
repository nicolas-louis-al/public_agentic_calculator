const TASKS = [
    {
        id: 'sprint_planning', name: "Sprint Planning & Forecasting", multiplier: 20.0,
        profile: { output: 0.08, cachedRatio: 0.85 }, hasQuantity: false, scope: 'repo',
        description: "Analyzing backlog against repository history to estimate effort.",
        allowedTiers: ['Powerful']
    },
    {
        id: 'arch_design', name: "Architecture & Scaffolding", multiplier: 15.0,
        profile: { output: 0.05, cachedRatio: 0.90 }, hasQuantity: false, scope: 'repo',
        description: "Translating PRDs into system architecture and boilerplate code.",
        allowedTiers: ['Powerful']
    },
    {
        id: 'challenge_specs', name: "Challenge Specs vs Codebase", multiplier: 12.0,
        profile: { output: 0.05, cachedRatio: 0.95 }, hasQuantity: false, scope: 'repo',
        description: "Cross-referencing PRDs against the current state of the codebase.",
        allowedTiers: ['Versatile', 'Powerful']
    },
    {
        id: 'feature_dev_s', name: "Feature Implementation (Small)", multiplier: 10.0,
        profile: { output: 0.10, cachedRatio: 0.85 }, hasQuantity: true, unit: "Features",
        scope: 'feature', baseLoc: 250,
        description: "Minor tweaks or single CRUD endpoints (Scope: ~250 LOC / feature).",
        allowedTiers: ['Lightweight', 'Versatile']
    },
    {
        id: 'feature_dev_m', name: "Feature Implementation (Medium)", multiplier: 25.0,
        profile: { output: 0.15, cachedRatio: 0.75 }, hasQuantity: true, unit: "Features",
        scope: 'feature', baseLoc: 1000,
        description: "Standard end-to-end feature coding (Scope: ~1,000 LOC / feature).",
        allowedTiers: ['Versatile']
    },
    {
        id: 'feature_dev_l', name: "Feature Implementation (Large)", multiplier: 50.0,
        profile: { output: 0.20, cachedRatio: 0.65 }, hasQuantity: true, unit: "Features",
        scope: 'feature', baseLoc: 5000,
        description: "Multi-component cross-file reasoning (Scope: ~5,000 LOC / feature).",
        allowedTiers: ['Versatile', 'Powerful']
    },
    {
        id: 'feature_dev_xl', name: "Feature Implementation (Extra Large)", multiplier: 100.0,
        profile: { output: 0.25, cachedRatio: 0.55 }, hasQuantity: true, unit: "Features",
        scope: 'feature', baseLoc: 15000,
        description: "Epic-level systemic features or core changes (Scope: ~15k LOC / epic).",
        allowedTiers: ['Powerful']
    },
    {
        id: 'pr_review', name: "Automated PR Review", multiplier: 8.0,
        profile: { output: 0.05, cachedRatio: 0.95 }, hasQuantity: true, unit: "PRs",
        scope: 'feature', baseLoc: 500,
        description: "Deep codebase context analysis for diffs (Scope: ~500 LOC diff / PR).",
        allowedTiers: ['Lightweight', 'Versatile']
    },
    {
        id: 'security_audit', name: "Security Vulnerability Audit", multiplier: 45.0,
        profile: { output: 0.02, cachedRatio: 0.90 }, hasQuantity: false, scope: 'repo',
        description: "Tracing data flow paths across the repository to find exploits.",
        allowedTiers: ['Powerful'],
        onlyBrownfield: true
    },
    {
        id: 'refactor_migration', name: "Legacy Codebase Migration", multiplier: 85.0,
        profile: { output: 0.40, cachedRatio: 0.60 }, hasQuantity: false, scope: 'repo',
        description: "Massive rewrites (e.g., JS to TS) with continuous test verification.",
        allowedTiers: ['Powerful', 'Versatile'],
        onlyBrownfield: true
    },
    {
        id: 'tech_debt_mgmt', name: "Technical Debt Management", multiplier: 30.0,
        profile: { output: 0.15, cachedRatio: 0.80 }, hasQuantity: false, scope: 'repo',
        description: "Identifying, analyzing, and refactoring technical debt across the existing codebase.",
        allowedTiers: ['Versatile', 'Powerful'],
        onlyBrownfield: true
    },
    {
        id: 'dependency_upgrade', name: "Dependency / Framework Upgrade", multiplier: 22.0,
        profile: { output: 0.10, cachedRatio: 0.85 }, hasQuantity: false, scope: 'repo',
        description: "Sweeping codebase to fix breaking changes caused by major framework version bumps.",
        allowedTiers: ['Versatile', 'Powerful'],
        onlyBrownfield: true
    },
    {
        id: 'docs', name: "Documentation Sweep", multiplier: 4.2, 
        profile: { output: 0.10, cachedRatio: 0.85 }, hasQuantity: false, scope: 'repo',
        description: "Repository-wide synchronization, Wiki/README generation.",
        allowedTiers: ['Lightweight']
    },
    {
        id: 'quality', name: "Quality Assurance Audit", multiplier: 10.8,
        profile: { output: 0.02, cachedRatio: 0.90 }, hasQuantity: false, scope: 'repo',
        description: "Continuous syntax verification & architectural consistency checks.",
        allowedTiers: ['Lightweight', 'Versatile']
    },
    {
        id: 'test_standard', name: "Synthetic Test Gen (Standard)", multiplier: 70.0,
        profile: { output: 0.25, cachedRatio: 0.80 }, hasQuantity: false, scope: 'repo',
        description: "Generates tests to meet 1:1 ratio for web/backend systems.",
        allowedTiers: ['Versatile']
    },
    {
        id: 'test_industrial', name: "Synthetic Test Gen (Industrial/IoT)", multiplier: 120.0,
        profile: { output: 0.20, cachedRatio: 0.85 }, hasQuantity: false, scope: 'repo',
        description: "Strict safety compliance (MISRA C) & HIL mocking.",
        allowedTiers: ['Powerful']
    }
];
