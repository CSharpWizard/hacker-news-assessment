using hacker_news.Server.Models;

namespace hacker_news.Server.Repositories
{
    public interface IStoryRepository
    {
        Task<IEnumerable<Story>> GetNewestStoriesAsync();
    }
}
