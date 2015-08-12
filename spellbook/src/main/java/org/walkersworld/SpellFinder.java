package org.walkersworld;

import org.jboss.ejb3.annotation.SecurityDomain;
import org.keycloak.KeycloakPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.walkersworld.persistence.Spell;
import org.walkersworld.persistence.SpellType;
import org.walkersworld.persistence.pdo.SpellFacade;
import org.walkersworld.persistence.pdo.SpellTypeFacade;

import javax.annotation.Resource;
import javax.annotation.security.RolesAllowed;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;


@Stateless
@SecurityDomain("keycloak")
public class SpellFinder {
    private static final Logger LOG = LoggerFactory.getLogger(SpellFinder.class);

    @Inject
    SpellFacade spellFacade;

    @Inject
    SpellTypeFacade spellTypeFacade;

    @Resource
    SessionContext sessionContext;

    @RolesAllowed({"Death Eaters", "Dumbledores Army", "Order Of The Phoenix", "Spell Creators"})
    public List<Spell> findAllSpells() {
        KeycloakPrincipal keycloakPrincipal = (KeycloakPrincipal) sessionContext.getCallerPrincipal();

        List<Spell> spellList;
        if (isDark()) {
            spellList = spellFacade.findAll();
        } else {
            spellList = spellFacade.findLightSpells();
        }

        return spellList;
    }

    @RolesAllowed({"Death Eaters", "Dumbledores Army", "Order Of The Phoenix", "Spell Creators"})
    public Spell findSpell(short spellId) {
        return spellFacade.find(spellId);
    }

    @RolesAllowed({"Death Eaters", "Dumbledores Army", "Order Of The Phoenix", "Spell Creators"})
    public List<SpellType> findSpellTypes() {
        return spellTypeFacade.findAll();
    }

    @RolesAllowed({"Spell Creators"})
    public void updateSpell(Spell spell) {
        spellFacade.edit(spell);
    }

    private boolean isDark() {
        return sessionContext.isCallerInRole("Death Eaters");
    }

}
