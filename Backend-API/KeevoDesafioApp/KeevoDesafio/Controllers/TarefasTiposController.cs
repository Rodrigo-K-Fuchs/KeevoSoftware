using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KeevoDesafio.Data;
using KeevoDesafio.Model;

namespace KeevoDesafio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefasTiposController : ControllerBase
    {
        private readonly DataContext _context;

        public TarefasTiposController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TarefasTipos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TarefasTipo>>> GetTarefasTipo()
        {
            return await _context.TarefasTipo.ToListAsync();
        }

        // GET: api/TarefasTipos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TarefasTipo>> GetTarefasTipo(int id)
        {
            var tarefasTipo = await _context.TarefasTipo.FindAsync(id);

            if (tarefasTipo == null)
            {
                return NotFound();
            }

            return tarefasTipo;
        }

        // PUT: api/TarefasTipos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarefasTipo(int id, TarefasTipo tarefasTipo)
        {
            if (id != tarefasTipo.id)
            {
                return BadRequest();
            }

            _context.Entry(tarefasTipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TarefasTipoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TarefasTipos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TarefasTipo>> PostTarefasTipo(TarefasTipo tarefasTipo)
        {
            _context.TarefasTipo.Add(tarefasTipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTarefasTipo", new { id = tarefasTipo.id }, tarefasTipo);
        }

        // DELETE: api/TarefasTipos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarefasTipo(int id)
        {
            var tarefasTipo = await _context.TarefasTipo.FindAsync(id);
            if (tarefasTipo == null)
            {
                return NotFound();
            }

            _context.TarefasTipo.Remove(tarefasTipo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TarefasTipoExists(int id)
        {
            return _context.TarefasTipo.Any(e => e.id == id);
        }
    }
}
