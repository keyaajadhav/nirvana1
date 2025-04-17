import React from "react";
import ""../styles/Resources.css"";

function scrollToCategory(categoryId) {
  const element = document.getElementById(categoryId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  }
}

function App() {
  return (
    <div>
      <header>
        <div className="logo">Nirvana</div>
        <div className="tagline">Your Journey to Mental Wellness</div>
      </header>

      <nav>
        <div className="nav-container">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#" className="active">Resources</a>
          <a href="#">Blog</a>
          <a href="#">Community</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <br />

      <div className="category-nav">
        {[
          "anxiety", "depression", "sleep", "stress", "self-care",
          "mindfulness", "trauma", "relationships", "crisis", "professional"
        ].map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => scrollToCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="intro">
          <h1>Mental Wellness Resources</h1>
          <p>
            We've curated a collection of valuable resources to support your mental health journey.
            Browse through different categories to find articles, videos, and practical tools.
          </p>
        </div>

        <div className="featured-section">
          <h2 className="category-heading">Featured Articles</h2>
          <div className="featured-grid">
            {[
              {
                title: "How to deal with Social Anxiety",
                img: "https://cdn.sanity.io/images/nh775r0u/production/4e533d38e8e118d8c3609020c107a1571641578d-1920x1280.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/how-to-deal-with-social-anxiety"
              },
              {
                title: "Understanding Depression and Effective ways to Heal",
                img: "https://cdn.sanity.io/images/nh775r0u/production/bb61028ce7e617724ad5bef52c604be24cb7e324-1280x1924.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/understanding-depression-and-effective-ways-to-heal"
              },
              {
                title: "How to deal with Irrational Fears",
                img: "https://cdn.sanity.io/images/nh775r0u/production/6f3693cd7933632783603d2a56457d6dc8eadecd-1280x1919.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/how-to-deal-with-irrational-fears"
              },
              {
                title: "Intrusive Thoughts - Knowing the Causes, Types, and Treatment",
                img: "https://cdn.sanity.io/images/nh775r0u/production/62667cd1fd75c7dff00366204386529c469788ce-1280x1920.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/intrusive-thoughts-knowing-the-causes-types-and-treatment"
              },
              {
                title: "5 Best Stress Management Techniques",
                img: "https://cdn.sanity.io/images/nh775r0u/production/5f0b274cedd1c4f1e98d4e245564abbaac4aa27f-1920x1280.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/5-best-stress-management-techniques"
              },
              {
                title: "Are you Unhappy with your Life?",
                img: "https://cdn.sanity.io/images/nh775r0u/production/2f21f3327002b3fd8b9def9c12783f4998ba64cf-1920x1000.png?fit=max&auto=format",
                url: "https://manastha.com/blog/are-you-unhappy-with-your-life"
              },
              {
                title: "5 Effective Anger Management Strategies",
                img: "https://cdn.sanity.io/images/nh775r0u/production/7d17c9a92a36fcd4e06e8b1e40e77eb701cea2cf-1920x1151.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/5-effective-anger-management-strategies"
              },
              {
                title: "How to Stop Procrastination",
                img: "https://cdn.sanity.io/images/nh775r0u/production/10d838acaf6aa1340bd721ab423fb7df02078a8c-640x960.jpg?fit=max&auto=format",
                url: "https://manastha.com/blog/how-to-stop-procrastination"
              }
            ].map((item, index) => (
              <a
                key={index}
                className="card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <div className="card-body">
                  <div className="flex items-center justify-between space-x-3">
                    <div>
                      <div className="heading6">{item.title}</div>
                    </div>
                    <div className="rounded-full border p-sm">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="anxiety" className="category-section">
          <h2 className="category-heading">Anxiety Resources</h2>

          {/* Featured Article */}
          <div className="resource-type">
            <h3>Featured Article</h3>
            <a
              className="card"
              href="https://manastha.com/blog/how-to-deal-with-social-anxiety"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src="https://cdn.sanity.io/images/nh775r0u/production/4e533d38e8e118d8c3609020c107a1571641578d-1920x1280.jpg?fit=max&auto=format"
                  alt="How to deal with Social Anxiety"
                />
              </figure>
              <div className="card-body">
                <div>
                  <p className="resource-source">ARTICLE | 7 MIN READ</p>
                </div>
                <div className="flex items-center justify-between space-x-3">
                  <div>
                    <div className="heading6">How to deal with Social Anxiety</div>
                    <p className="card-description">
                      It’s common to experience anxiety in certain social settings. For
                      instance, giving a presentation or going on a date can make you
                      feel a little nervous, which is expected. A mental health issue
                      known as social anxiety disorder is defined by a dread of being
                      observed or evaluated by others in social settings...
                    </p>
                  </div>
                  <div className="rounded-full border p-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Blog Articles */}
          <div className="resource-type">
            <h3>Blog Articles</h3>
            <ul className="resource-list">
              <li className="resource-item">
                <a
                  href="https://www.psychologytoday.com/us/basics/anxiety"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Understanding Anxiety Disorders
                </a>
                <span className="resource-source"> - Psychology Today</span>
              </li>
              <li className="resource-item">
                <a
                  href="https://www.verywellmind.com/panic-disorder-4157247"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  When Panic Attacks: Techniques for Managing Anxiety
                </a>
                <span className="resource-source"> - VeryWell Mind</span>
              </li>
              <li className="resource-item">
                <a
                  href="https://www.healthline.com/health/anxiety"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Science Behind Anxiety and How to Manage It
                </a>
                <span className="resource-source"> - Healthline</span>
              </li>
            </ul>
          </div>

          {/* Videos */}
          <div className="resource-type">
            <h3>Videos</h3>
            <div className="video-resources">
              <div className="video-card">
                <div className="video-placeholder">
                  <iframe
                    width="360"
                    height="180"
                    src="https://www.youtube.com/embed/PxjxY9VilCs?si=RI39G1fbry8_R2PV"
                    title="How to cope with anxiety"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <div className="video-title">How to cope with anxiety</div>
                  <div className="video-creator">By Therapy in a Nutshell</div>
                </div>
              </div>

              <div className="video-card">
                <div className="video-placeholder">
                  <iframe
                    width="360"
                    height="180"
                    src="https://www.youtube.com/embed/8_PQJNo2wME?si=Ijts4zG1o8qILlbL"
                    title="Self-Hatred & Anxiety"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <div className="video-title">Self-Hatred & Anxiety</div>
                  <div className="video-creator">By The School of Life</div>
                </div>
              </div>

              <div className="video-card">
                <div className="video-placeholder">
                  <iframe
                    width="360"
                    height="180"
                    src="https://www.youtube.com/embed/grfXR6FAsI8?si=LrjqGDl4XNttqsTn"
                    title="3-Minute Anxiety Relief Technique"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <div className="video-title">3-Minute Anxiety Relief Technique</div>
                  <div className="video-creator">By Therapy in a Nutshell</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Exercises */}
          <div className="resource-type">
            <h3>Tools & Exercises</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-title">Mindful breathing exercises</div>
                <p>Simple breathing techniques to help reduce anxiety in the moment.</p>
              </div>
              <div className="tool-card">
                <img
                  src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150121728/settings_images/aK1Ir9alTauqQYpZatsL_file.jpg"
                  alt="Quick Start Guide to Anxiety"
                />
                <div className="tool-title">Quick Start Guide to Anxiety</div>
                <p>Quick tips and skills to get a start at managing anxiety.</p>
                <a
                  href="https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/2147560907/themes/2151805623/downloads/df67d-841f-6b4f-e5db-350522acfd_Updated_Quickstart_Guide_to_Anxiety.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-button">Download Quick Start Guide</button>
                </a>
              </div>
              <div className="tool-card">
                <div className="tool-title">Anxiety tracking worksheet</div>
                <p>Monitor your triggers and symptoms to better manage your anxiety.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="crisis" className="category-section">
        <h2 className="category-heading">Crisis Resources</h2>

        <div className="crisis-resources">
          <h3>Immediate Help</h3>
          <p><strong>If you or someone you know is in immediate danger, please call emergency services (100) right away.</strong></p>
          <ul className="resource-list">
            <li className="resource-item">
              <strong>National Suicide Prevention Lifeline:</strong> 988 or 1-800-273-8255
            </li>
            <li className="resource-item">
              <strong>Crisis Text Line (WhatsApp):</strong>{' '}
              <a href="https://icallhelpline.org/" target="_blank" rel="noopener noreferrer">
                Visit iCall Helpline
              </a>
            </li>
            <li className="resource-item">
              <strong>Online Crisis Support:</strong>{' '}
              <a href="http://www.aasra.info/" target="_blank" rel="noopener noreferrer">
                Visit Aasra for crisis support
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-type">
          <h3>Local Resources</h3>
          <ul className="resource-list">
            <li className="resource-item">
              <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer">
                Find a Therapist Tool
              </a>
              <span className="resource-source"> - Psychology Today</span>
            </li>
            <li className="resource-item">
              <a href="#">Community Mental Health Centers Directory</a>
              <span className="resource-source"> - Contact us to find centers in your area</span>
            </li>
            <li className="resource-item">
              <a href="#">Support Group Finder</a>
              <span className="resource-source"> - Find local and online support groups</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Help Section */}
      <div id="professional" className="category-section">
        <h2 className="category-heading">Professional Help</h2>

        <div className="resource-type">
          <h3>Finding Treatment</h3>
          <ul className="resource-list">
            <li className="resource-item">
              <a href="https://www.apa.org/topics/psychotherapy/understanding" target="_blank" rel="noopener noreferrer">
                What to Expect in Therapy
              </a>
              <span className="resource-source"> - American Psychological Association</span>
            </li>
            <li className="resource-item">
              <a href="https://www.nimh.nih.gov/health/topics/mental-health-treatments" target="_blank" rel="noopener noreferrer">
                Types of Mental Health Professionals
              </a>
              <span className="resource-source"> - National Institute of Mental Health</span>
            </li>
            <li className="resource-item">
              <a href="https://www.goodtherapy.org/blog/how-to-find-therapist-counselor-choosing-best-mental-healthcare-professional-0719164" target="_blank" rel="noopener noreferrer">
                How to Choose the Right Therapist
              </a>
              <span className="resource-source"> - GoodTherapy</span>
            </li>
            <li className="resource-item">
              <a href="https://www.amahahealth.com/blog/what-to-expect-from-a-psychiatric-consultation/?pageName=resources_article&fromSpotlight=true&source=topnav" target="_blank" rel="noopener noreferrer">
                What to Expect from a Psychiatric Consultation
              </a>
              <span className="resource-source"> - Amaha Health</span>
            </li>
          </ul>
        </div>

        <div className="resource-type">
          <h3>Insurance & Accessibility</h3>
          <ul className="resource-list">
            <li className="resource-item">
              <a href="#">Guide to Using Insurance for Mental Health Care</a>
              <span className="resource-source"> - Nirvana Resource</span>
            </li>
            <li className="resource-item">
              <a href="#">Low-Cost Therapy Options</a>
              <span className="resource-source"> - Nirvana Resource</span>
            </li>
            <li className="resource-item">
              <a href="#">Sliding Scale Services Directory</a>
              <span className="resource-source"> - Nirvana Resource</span>
            </li>
          </ul>
        </div>
      </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <p>© 2025 Nirvana Mental Wellness. All rights reserved.</p>
      </footer>
      </div>


  );
}

export default App;
