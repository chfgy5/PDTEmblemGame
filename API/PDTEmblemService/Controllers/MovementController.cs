using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using PDTEmblemService.Models;

namespace PDTEmblemService.Controllers
{
    public class MovementController : ApiController
    {
        // GET api/<controller>/5
        public HttpResponseMessage Get(Object characterObj)
        {
            var character = JsonConvert.DeserializeObject<Character>(characterObj.ToString());
            List<int> moveList = new List<int>();
            if (character.Location == -1)
            {
                if (character.Team == 1)
                {
                    for (var i = 0; i < 6; i++)
                    {
                        moveList[i] = Actions.Move;
                    }
                }
                else if (character.Team == 2)
                {
                    for (var i = 0; i < 6; i++)
                    {
                        moveList[29 - i] = Actions.Move;
                    }
                }
            }
            else
            {
                int i;
                for (i = 0; i <= character.Movement; i++)
                {
                    moveList[character.Location + i] = Actions.Move;
                    moveList[character.Location - i] = Actions.Move;
                    moveList[character.Location + 6 * i] = Actions.Move;
                    moveList[character.Location - 6 * i] = Actions.Move;

                    moveList[character.Location + i + 1] = Actions.Attack;
                    moveList[character.Location - i - 1] = Actions.Attack;
                    moveList[character.Location + 6 * i + 1] = Actions.Attack;
                    moveList[character.Location - 6 * i - 1] = Actions.Attack;

                    for (var j = 0; j <= character.Movement - i; j++)
                    {
                        moveList[character.Location + 6 * i + j] = Actions.Move;
                        moveList[character.Location + 6 * i - j] = Actions.Move;
                        moveList[character.Location - 6 * i + j] = Actions.Move;
                        moveList[character.Location - 6 * i - j] = Actions.Move;

                        moveList[character.Location + 6 * i + j + 1] = Actions.Attack;
                        moveList[character.Location + 6 * i - j - 1] = Actions.Attack;
                        moveList[character.Location - 6 * i + j + 1] = Actions.Attack;
                        moveList[character.Location - 6 * i - j - 1] = Actions.Attack;
                    }
                }

                moveList[character.Location + 6 * i] = Actions.Attack;
                moveList[character.Location - 6 * i] = Actions.Attack;
            }

            HttpResponseMessage response;
            response = Request.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:4200");
            response.Content = new StringContent(JsonConvert.SerializeObject(moveList), System.Text.Encoding.UTF8, "application/json");
            return response;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}