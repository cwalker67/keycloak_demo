/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.walkersworld.persistence;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author cwalker
 */
@Entity
@Table(catalog = "Spellbook", name = "spell")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Spell.findByName", query = "SELECT s FROM Spell s WHERE s.name = :name"),
    @NamedQuery(name = "Spell.findBySpellAffinity", query = "SELECT s FROM Spell s WHERE s.spellAffinity = :spellAffinity"),
    @NamedQuery(name = "Spell.findDarkSpells", query = "SELECT s FROM Spell s WHERE s.spellAffinity != 'LIGHT'"),
    @NamedQuery(name = "Spell.findLightSpells", query = "SELECT s FROM Spell s WHERE s.spellAffinity != 'DARK'")
})
public class Spell implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "spell_id", nullable = false)
    private Short spellId;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(nullable = false, length = 50)
    private String name;

    @Size(max = 255)
    @Column(length = 255)
    private String description;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 7)
    @Column(name = "spell_affinity", nullable = false, length = 7)
    private String spellAffinity;

    @JoinColumn(name = "spell_type", referencedColumnName = "spell_type_id", nullable = false)
    @ManyToOne(optional = false)
    private SpellType spellType;

    public Spell() {
    }

    public Spell(Short spellId) {
        this.spellId = spellId;
    }

    public Spell(Short spellId, String name, String spellAffinity) {
        this.spellId = spellId;
        this.name = name;
        this.spellAffinity = spellAffinity;
    }

    public Short getSpellId() {
        return spellId;
    }

    public void setSpellId(Short spellId) {
        this.spellId = spellId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSpellAffinity() {
        return spellAffinity;
    }

    public void setSpellAffinity(String spellAffinity) {
        this.spellAffinity = spellAffinity;
    }

    public SpellType getSpellType() {
        return spellType;
    }

    public void setSpellType(SpellType spellType) {
        this.spellType = spellType;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (spellId != null ? spellId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Spell)) {
            return false;
        }
        Spell other = (Spell) object;
        if ((this.spellId == null && other.spellId != null) || (this.spellId != null && !this.spellId.equals(other.spellId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.walkersworld.persistence.Spell[ spellId=" + spellId + " ]";
    }
    
}
