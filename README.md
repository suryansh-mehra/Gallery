# Gallery

A simple image gallery application built with React. It fetches images from an API and displays them in a responsive grid layout with pagination.

## Preview

<img width="1920" height="1080" alt="Preview" src="https://github.com/user-attachments/assets/d9f9d9a0-17f3-4500-b009-8dc860568762" />


## Features

* Fetch images from API
* Pagination (Next / Prev)
* Responsive grid layout
* Scrollable gallery section
* Clean UI design

## Tech Stack

* React.js
* Tailwind CSS
* Axios

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/suryansh-mehra/Gallery.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## API Used

https://picsum.photos/

Endpoint:

```bash
https://picsum.photos/v2/list?page={page}&limit=16
```

## Functionality

* Images are fetched based on the current page number
* Clicking Next or Prev updates the page and fetches new images
* Gallery updates dynamically based on API response
