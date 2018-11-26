namespace PDTEmblemService.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public int Location { get; set; }
        public int Team { get; set; }
        public int Movement { get; set; }
        public int Health { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
    }
}