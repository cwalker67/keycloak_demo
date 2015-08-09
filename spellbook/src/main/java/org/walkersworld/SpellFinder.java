package org.walkersworld;

import org.jboss.ejb3.annotation.SecurityDomain;
import org.keycloak.KeycloakPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.walkersworld.persistence.Spell;
import org.walkersworld.persistence.pdo.SpellFacade;

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

    private boolean isDark() {
        return sessionContext.isCallerInRole("Death Eaters");
    }

}
