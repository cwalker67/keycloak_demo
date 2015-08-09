/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.walkersworld.persistence.pdo;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.walkersworld.persistence.SpellType;

/**
 *
 * @author cwalker
 */
@Stateless
public class SpellTypeFacade extends AbstractFacade<SpellType> {
    @PersistenceContext(unitName = "SpellBookDSUnit")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public SpellTypeFacade() {
        super(SpellType.class);
    }
    
}
