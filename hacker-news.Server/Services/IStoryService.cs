using hacker_news.Server.Models;

namespace hacker_news.Server.Services
{
    public interface IStoryService
    {
        Task<PaginatedResponse<Story>> GetStoriesAsync(string search, int page, int pageSize);
    }
}
