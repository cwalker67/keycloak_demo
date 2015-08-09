/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.walkersworld.persistence.pdo;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.walkersworld.persistence.Spell;

import java.util.List;

/**
 *
 * @author cwalker
 */
@Stateless
public class SpellFacade extends AbstractFacade<Spell> {
    @PersistenceContext(unitName = "SpellBookDSUnit")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public SpellFacade() {
        super(Spell.class);
    }

    public List<Spell> findLightSpells() {
        TypedQuery<Spell> query = em.createNamedQuery("Spell.findLightSpells", Spell.class);
        return query.getResultList();
    }
}
