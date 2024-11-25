using hacker_news.Server.Models;
using Microsoft.Extensions.Caching.Memory;

namespace hacker_news.Server.Repositories
{
    public class StoryRepository : IStoryRepository
    {
        private readonly HttpClient _httpClient;
        private readonly IMemoryCache _cache;

        private const string NewStoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";
        private const string StoryDetailUrl = "https://hacker-news.firebaseio.com/v0/item/{0}.json";
        private const string CacheKey = "NewestStories";
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(10);

        public StoryRepository(HttpClient httpClient, IMemoryCache cache)
        {
            _httpClient = httpClient;
            _cache = cache;
        }

        public async Task<IEnumerable<Story>> GetNewestStoriesAsync()
        {
            if (_cache.TryGetValue(CacheKey, out IEnumerable<Story> cachedStories))
            {
                return cachedStories;
            }

            var storyIds = await _httpClient.GetFromJsonAsync<List<int>>(NewStoriesUrl);
            if (storyIds == null) return Enumerable.Empty<Story>();

            var stories = new List<Story>();
            foreach (var id in storyIds.Take(100)) // Limit to 100 stories
            {
                var story = await _httpClient.GetFromJsonAsync<Story>(string.Format(StoryDetailUrl, id));
                if (story != null && !string.IsNullOrEmpty(story.Url))
                {
                    stories.Add(story);
                }
            }

            _cache.Set(CacheKey, stories, _cacheDuration);
            return stories;
        }
    }
}
