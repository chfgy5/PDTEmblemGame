using PDTEmblemService.Models;
using System.Collections.Generic;

namespace PDTEmblemService.MockDatabase
{
    public static class MockDatabase
    {
        public static List<Character> Characters = new List<Character> { 
            new Character { Id = 0, Image = "empty.png", Location = -1, Team = 0, Movement = 0, Health = 0, Attack = 0, Defense = 0 },
            new Character { Id = 1, Image = "person.png", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 15, Defense = 10 },
            new Character { Id = 2, Image = "MrBravo.webp", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 25, Defense = 15 },
            new Character { Id = 3, Image = "mighty.png", Location = -1, Team = 0, Movement = 2, Health = 100, Attack = 30, Defense = 20 },
            new Character { Id = 4, Image = "chewie.png", Location = -1, Team = 0, Movement = 1, Health = 150, Attack = 50, Defense = 15 },
            new Character { Id = 5, Image = "enfys.png", Location = -1, Team = 0, Movement = 1, Health = 60, Attack = 50, Defense = 20 },
            new Character { Id = 6, Image = "luigi.png", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 30, Defense = 15 },
            new Character { Id = 7, Image = "mudtrooper.png", Location = -1, Team = 0, Movement = 1, Health = 120, Attack = 50, Defense = 20 },
            new Character { Id = 8, Image = "enfys.png", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 3, Defense = 5 },
            new Character { Id = 9, Image = "chewie.png", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 3, Defense = 5 },
            new Character { Id = 10, Image = "pikachu.png", Location = -1, Team = 0, Movement = 1, Health = 100, Attack = 3, Defense = 5 }
        };

        public static List<List<int>> Boards = new List<List<int>>
        {
            new List<int>
            {
                0, 0, 0, 0, 0, 0,
                1, 2, 0, 0, 1, 0,
                2, 1, 2, 0, 2, 2,
                0, 2, 0, 2, 1, 1,
                0, 0, 0, 0, 0, 0
            },
            new List<int>
            {
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0
            }
        };
    }
}