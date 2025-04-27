export function formatPublishDate(dateString: string) {
  // Add noon UTC time to prevent date from shifting to previous day
  return new Date(dateString + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
