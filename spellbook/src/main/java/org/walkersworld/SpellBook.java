package org.walkersworld;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.walkersworld.persistence.Spell;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Stateless
@Path("spell")
public class SpellBook {
    private static final Logger LOG = LoggerFactory.getLogger(SpellBook.class);

    @Inject
    SpellFinder spellFinder;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findSpells() {
        return Response.ok().entity(spellFinder.findAllSpells()).build();
    }

    @GET
    @Path("/{spellId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findSpells(@PathParam("spellId") short spellId) {
        return Response.ok().entity(spellFinder.findSpell(spellId)).build();
    }

    @GET
    @Path("/type")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findSpellTypes() {
        return Response.ok().entity(spellFinder.findSpellTypes()).build();
    }

    @POST
    @Path("/{spellId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateSpell(@PathParam("spellId") short spellId, Spell spell) {
        Response response = null;
        try {
            spellFinder.updateSpell(spell);
            response = Response.ok().build();
        } catch (Exception ex) {
            response = Response.serverError().build();
        }
        return response;
    }


}
