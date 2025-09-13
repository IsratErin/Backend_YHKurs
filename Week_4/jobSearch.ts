// A function that searches for jobs
// A function that runs our app
// the command to start everything

// Define interfaces for API response
interface Employer {
  name: string;
}

interface WorkplaceAddress {
  municipality: string;
}

interface JobHit {
  headline: string;
  employer: Employer;
  workplace_address: WorkplaceAddress;
  publication_date: string;
}

interface JobSearchResponse {
  hits: JobHit[];
}

const searchJobs = async (keyword: string): Promise<void> => {
  try {
    const baseUrl = "https://jobsearch.api.jobtechdev.se/search";
    const params = new URLSearchParams({
      q: keyword,
      offset: "0",
      limit: "10",
    });

    const result = `${baseUrl}?${params.toString()}`;
    const response = await fetch(result);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: JobSearchResponse = await response.json();

    console.log(`\nFound ${data.hits.length} jobs`);
    console.log("-".repeat(50));

    data.hits.forEach((job: JobHit, index: number) => {
      const pubDate = new Date(job.publication_date);
      console.log(`${index + 1}. ${job.headline}`);
      console.dir(
        {
          company: job.employer.name,
          location: job.workplace_address,
          publicationDate: pubDate.toISOString().split("T")[0],
        },
        { depth: 2 },
      );
      console.log("-".repeat(50));
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error searching for jobs:", error.message);
    } else {
      console.error("An unexpected error occurred while searching for jobs");
    }
  }
};

const runApp = (): void => {
  try {
    console.log("Welcome to the Job Search App!");
    console.log("This app searches for jobs using JobTeach API");

    const keyword: string = "Software Developer in Malmö";
    searchJobs(keyword);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error running the application:", error.message);
    } else {
      console.error(
        "An unexpected error occurred while running the application",
      );
    }
  }
};

runApp();
