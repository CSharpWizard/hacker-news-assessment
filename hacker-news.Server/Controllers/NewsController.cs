using hacker_news.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace hacker_news.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly IStoryService _storyService;

        public NewsController(IStoryService storyService)
        {
            _storyService = storyService;
        }

        [HttpGet("stories")]
        public async Task<IActionResult> GetStories(string search = "", int page = 1, int pageSize = 10)
        {
            var stories = await _storyService.GetStoriesAsync(search, page, pageSize);
            return Ok(stories);
        }
    }
}
