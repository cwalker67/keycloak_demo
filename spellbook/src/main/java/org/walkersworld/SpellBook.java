package org.walkersworld;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
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


}
