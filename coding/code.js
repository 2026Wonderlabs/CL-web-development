// Modern Coding Reference Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initCounterAnimation();
    initSmoothScrolling();
    initLanguageModals();
    initCodeModals();
});

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Language Modals
function initLanguageModals() {
    // Language data
    const languageData = {
        javascript: {
            title: 'JavaScript Fundamentals',
            content: `
                <h4>Core Concepts</h4>
                <ul>
                    <li><strong>Variables:</strong> let, const, var</li>
                    <li><strong>Data Types:</strong> String, Number, Boolean, Object, Array</li>
                    <li><strong>Functions:</strong> Declaration, Expression, Arrow functions</li>
                    <li><strong>Objects:</strong> Properties, Methods, Prototypes</li>
                </ul>

                <h4>Key Features</h4>
                <ul>
                    <li>Asynchronous programming with Promises and async/await</li>
                    <li>Event-driven architecture</li>
                    <li>Dynamic typing</li>
                    <li>First-class functions</li>
                </ul>

                <h4>Example Code</h4>
                <pre><code>// Modern JavaScript Example
const fetchUserData = async (userId) => {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

// Usage
fetchUserData(123).then(user => {
    if (user) {
        console.log('User:', user.name);
    }
});</code></pre>
            `
        },
        python: {
            title: 'Python Programming',
            content: `
                <h4>Core Concepts</h4>
                <ul>
                    <li><strong>Variables:</strong> Dynamic typing, no declaration needed</li>
                    <li><strong>Data Types:</strong> int, float, str, list, dict, tuple</li>
                    <li><strong>Functions:</strong> def keyword, parameters, return values</li>
                    <li><strong>Classes:</strong> Object-oriented programming</li>
                </ul>

                <h4>Key Features</h4>
                <ul>
                    <li>Readable and clean syntax</li>
                    <li>Batteries included (rich standard library)</li>
                    <li>Strong community and ecosystem</li>
                    <li>Great for data science and automation</li>
                </ul>

                <h4>Example Code</h4>
                <pre><code># Python Data Processing Example
import pandas as pd
from typing import List, Dict

def process_sales_data(file_path: str) -> Dict[str, float]:
    """Process sales data and return summary statistics."""
    df = pd.read_csv(file_path)

    # Clean and process data
    df['date'] = pd.to_datetime(df['date'])
    df = df.dropna()

    # Calculate metrics
    total_sales = df['amount'].sum()
    avg_sale = df['amount'].mean()
    top_product = df.groupby('product')['amount'].sum().idxmax()

    return {
        'total_sales': total_sales,
        'average_sale': avg_sale,
        'top_product': top_product
    }

# Usage
results = process_sales_data('sales.csv')
print(f"Total Sales: ${results['total_sales']:,.2f}")</code></pre>
            `
        },
        java: {
            title: 'Java Programming',
            content: `
                <h4>Core Concepts</h4>
                <ul>
                    <li><strong>Variables:</strong> Primitive types, reference types</li>
                    <li><strong>Classes:</strong> Blueprints for objects</li>
                    <li><strong>Methods:</strong> Functions within classes</li>
                    <li><strong>Inheritance:</strong> Extending classes</li>
                </ul>

                <h4>Key Features</h4>
                <ul>
                    <li>Platform independence (Write Once, Run Anywhere)</li>
                    <li>Strongly typed language</li>
                    <li>Automatic memory management (Garbage Collection)</li>
                    <li>Rich ecosystem and frameworks</li>
                </ul>

                <h4>Example Code</h4>
                <pre><code>// Java Enterprise Application Example
import java.util.List;
import java.util.ArrayList;

public class UserService {
    private List&lt;User&gt; users;

    public UserService() {
        this.users = new ArrayList&lt;&gt;();
    }

    public User createUser(String name, String email) {
        User newUser = new User(name, email);
        users.add(newUser);
        return newUser;
    }

    public List&lt;User&gt; getAllUsers() {
        return new ArrayList&lt;&gt;(users);
    }

    public User findUserByEmail(String email) {
        return users.stream()
                .filter(user -&gt; user.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }
}

// Usage
UserService userService = new UserService();
User user = userService.createUser("John Doe", "john@example.com");</code></pre>
            `
        },
        html: {
            title: 'HTML & CSS',
            content: `
                <h4>HTML Structure</h4>
                <ul>
                    <li><strong>Semantic Elements:</strong> header, nav, main, section, article, aside, footer</li>
                    <li><strong>Forms:</strong> input, textarea, select, button</li>
                    <li><strong>Multimedia:</strong> img, video, audio</li>
                    <li><strong>Accessibility:</strong> alt attributes, ARIA labels</li>
                </ul>

                <h4>CSS Features</h4>
                <ul>
                    <li>Flexbox and Grid layouts</li>
                    <li>Responsive design with media queries</li>
                    <li>CSS Variables and custom properties</li>
                    <li>Animations and transitions</li>
                </ul>

                <h4>Example Code</h4>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Modern Web Page&lt;/title&gt;
    &lt;style&gt;
        :root {
            --primary-color: #2563eb;
            --spacing: 1rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--spacing);
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: calc(var(--spacing) * 2);
            margin: var(--spacing) 0;
        }

        @media (max-width: 768px) {
            .container {
                padding: calc(var(--spacing) / 2);
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="card"&gt;
            &lt;h1&gt;Hello, Modern Web!&lt;/h1&gt;
            &lt;p&gt;This is a responsive web page.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            `
        }
    };

    window.showLanguageModal = function(language) {
        const modal = document.getElementById('languageModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');

        if (languageData[language]) {
            title.textContent = languageData[language].title;
            body.innerHTML = languageData[language].content;
            modal.style.display = 'block';
        }
    };

    window.closeModal = function() {
        document.getElementById('languageModal').style.display = 'none';
    };
}

// Code Modals
function initCodeModals() {
    // Code content for different file types
    const codeContent = {
        html: {
            title: 'HTML Structure (code.html)',
            content: `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Coding Reference - Interactive Programming Guide&lt;/title&gt;
    &lt;link rel="stylesheet" href="code.css"&gt;
    &lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Navigation and content sections --&gt;
    &lt;nav class="navbar"&gt;
        &lt;div class="nav-container"&gt;
            &lt;div class="nav-brand"&gt;
                &lt;i class="fas fa-code"&gt;&lt;/i&gt;
                &lt;span&gt;Coding Reference&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="nav-links"&gt;
                &lt;a href="#home" class="nav-link active"&gt;Home&lt;/a&gt;
                &lt;a href="#languages" class="nav-link"&gt;Languages&lt;/a&gt;
                &lt;a href="#concepts" class="nav-link"&gt;Concepts&lt;/a&gt;
                &lt;a href="#tools" class="nav-link"&gt;Tools&lt;/a&gt;
                &lt;a href="#source" class="nav-link"&gt;Source Code&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/nav&gt;

    &lt;!-- Hero Section --&gt;
    &lt;section id="home" class="hero"&gt;
        &lt;div class="hero-container"&gt;
            &lt;div class="hero-content"&gt;
                &lt;h1 class="hero-title"&gt;
                    &lt;span class="gradient-text"&gt;Master Programming&lt;/span&gt;
                    &lt;br&gt;One Language at a Time
                &lt;/h1&gt;
                &lt;p class="hero-subtitle"&gt;
                    Interactive coding reference with examples, tutorials, and hands-on practice across multiple programming languages.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;

    &lt;script src="code.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`
        },
        css: {
            title: 'CSS Styling (code.css)',
            content: `/* Modern Coding Reference Website Styles */
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    --dark-bg: #0f172a;
    --darker-bg: #020617;
    --card-bg: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --border-color: #334155;
    --success-color: #10b981;
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    --border-radius: 12px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--dark-bg);
    overflow-x: hidden;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: var(--gradient);
    position: relative;
    overflow: hidden;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Language Cards */
.language-card {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 2rem;
    border: 1px solid var(--border-color);
    transition: var(--transition);
    cursor: pointer;
}

.language-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
    border-color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .languages-grid {
        grid-template-columns: 1fr;
    }
}`
        },
        javascript: {
            title: 'JavaScript Logic (code.js)',
            content: `// Modern Coding Reference Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initCounterAnimation();
    initSmoothScrolling();
    initLanguageModals();
    initCodeModals();
});

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Language Modals
function initLanguageModals() {
    // Language data object with detailed information
    const languageData = {
        javascript: {
            title: 'JavaScript Fundamentals',
            content: 'Detailed JavaScript information...'
        },
        python: {
            title: 'Python Programming',
            content: 'Comprehensive Python guide...'
        }
    };

    window.showLanguageModal = function(language) {
        const modal = document.getElementById('languageModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');

        if (languageData[language]) {
            title.textContent = languageData[language].title;
            body.innerHTML = languageData[language].content;
            modal.style.display = 'block';
        }
    };

    window.closeModal = function() {
        document.getElementById('languageModal').style.display = 'none';
    };
}

// Code Modals
function initCodeModals() {
    // Code content for different file types
    const codeContent = {
        html: { title: 'HTML Structure', content: 'HTML code...' },
        css: { title: 'CSS Styling', content: 'CSS code...' },
        javascript: { title: 'JavaScript Logic', content: 'JavaScript code...' }
    };

    window.showCodeModal = function(type) {
        const modal = document.getElementById('codeModal');
        const title = document.getElementById('codeModalTitle');
        const body = document.getElementById('codeModalBody');

        if (codeContent[type]) {
            title.textContent = codeContent[type].title;
            body.innerHTML = \`<pre><code>\${codeContent[type].content}</code></pre>\`;
            modal.style.display = 'block';
        }
    };

    window.closeCodeModal = function() {
        document.getElementById('codeModal').style.display = 'none';
    };
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const languageModal = document.getElementById('languageModal');
    const codeModal = document.getElementById('codeModal');

    if (event.target === languageModal) {
        languageModal.style.display = 'none';
    }
    if (event.target === codeModal) {
        codeModal.style.display = 'none';
    }
});`
        }
    };

    window.showCodeModal = function(type) {
        const modal = document.getElementById('codeModal');
        const title = document.getElementById('codeModalTitle');
        const body = document.getElementById('codeModalBody');

        if (codeContent[type]) {
            title.textContent = codeContent[type].title;
            body.innerHTML = `<pre><code>${codeContent[type].content}</code></pre>`;
            modal.style.display = 'block';
        }
    };

    window.closeCodeModal = function() {
        document.getElementById('codeModal').style.display = 'none';
    };
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const languageModal = document.getElementById('languageModal');
    const codeModal = document.getElementById('codeModal');

    if (event.target === languageModal) {
        languageModal.style.display = 'none';
    }
    if (event.target === codeModal) {
        codeModal.style.display = 'none';
    }
});