namespace hacker_news.Server.Models
{
    public class Story
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
    }
    public class PaginatedResponse<T>
    {
        public IEnumerable<T> Items { get; set; }
        public int totalCount { get; set; }
    }
}
