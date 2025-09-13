
# Website Link Finder and Smart Search System

## Overview
This project addresses navigation challenges on poorly organized websites, such as college portals, where users often struggle to find relevant pages. It enables users to input a website URL, automatically crawls the site to gather all internal links along with their metadata, and allows users to perform intelligent searches using natural language queries. The system leverages NLP to understand search intent and returns the most relevant page links, enhancing user experience and accessibility.

## Features
- **Comprehensive Web Crawling:** Efficiently crawl and extract all internal URLs from any given website.
- **Metadata Extraction:** Capture page titles, meta descriptions, and snippets to enrich search relevance.
- **Advanced NLP Query Processing:** Process user queries using tokenization, lemmatization, and semantic embeddings.
- **Semantic Search Matching:** Use vector similarity to find the best matching pages based on user input.
- **User-Friendly Interface:** Simple web interface to input URLs and search queries, displaying clear, clickable results.

## Tech Stack
| Component          | Technology                          |
|--------------------|-----------------------------------|
| Backend Framework  | Python (Flask)           |
| Web Crawler        | Python (BeautifulSoup, Requests)    |
| NLP Processing     | spaCy, Sentence Transformers (BERT)|
| Database           | SQLite                   |
| Frontend           | React.js |
| Deployment         | Vercel            |

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js and npm (if using React frontend)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/jaiyankargupta/smart-search-system.git
   cd smart-search-system
   ```
2. Install backend dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Set up and configure your database (SQLite).

4. (Optional) Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Project
- Start the backend server:
  ```
  python app.py
  ```
- (Optional) Start the frontend development server:
  ```
  npm start
  ```
- Open your browser and navigate to `http://localhost:3000` (or the configured frontend port).

## Usage
1. Enter the URL of the website you want to crawl.
2. The system will crawl and index the website’s pages and metadata.
3. Enter a search query related to the content you are looking for.
4. View and select from relevant, organized page links returned by the system.

## Future Improvements
- Add configurable crawl depth and frequency controls.
- Implement user accounts and personalized search histories.
- Support multi-language crawling and query processing.
- Introduce caching and indexing techniques for faster searches.
- Enhance frontend UI/UX with advanced visualization of results.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
[Rahul Kumar] - [https://www.github.com/jaiyankargupta]

---

Thank you for checking out this project! Contributions and feedback are welcome.
