using hacker_news.Server.Models;
using hacker_news.Server.Repositories;

namespace hacker_news.Server.Services
{
    public class StoryService : IStoryService
    {
        private readonly IStoryRepository _storyRepository;
        
        public StoryService(IStoryRepository storyRepository)
        {
            _storyRepository = storyRepository;
        }

        public async Task<PaginatedResponse<Story>> GetStoriesAsync(string search, int page, int pageSize)
        {
            var stories = await _storyRepository.GetNewestStoriesAsync();

            if (!string.IsNullOrEmpty(search))
            {
                stories = stories.Where(s => s.Title.Contains(search, StringComparison.OrdinalIgnoreCase));
            }

            var totalCount = stories.Count(); // Calculate total count before pagination

            var paginatedStories = stories
                .Skip((page - 1) * pageSize)
                .Take(pageSize);

            return new PaginatedResponse<Story>
            {
                Items = paginatedStories,
                totalCount = totalCount
            };


        }

    }
}
